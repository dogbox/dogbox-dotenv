#!/usr/bin/env bash
#
# bootstrap.sh — set up a new computer from this dotfiles repo.
#
#   1. installs oh-my-zsh (skipped if already present)
#   2. copies the tracked dotfiles into $HOME, backing up anything it replaces
#
# Usage:
#   ./bootstrap.sh              # install + copy
#   ./bootstrap.sh --dry-run    # print what would happen, change nothing
#   ./bootstrap.sh --force      # replace existing files without prompting
#
set -euo pipefail

DOTFILES_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET="${HOME}"
BACKUP_DIR="${TARGET}/.dotfiles-backup"

# Dotfiles to install, relative to the repo root.
DOTFILES=(
  .emacs.d
  .oh-my-zsh
  .gitconfig
  .scottrc
  .zshrc
)

DRY_RUN=0
FORCE=0

usage() {
  sed -n '2,12p' "${BASH_SOURCE[0]}" | sed 's/^#\{1,2\} \{0,1\}//'
}

log()  { printf '\033[0;34m==>\033[0m %s\n' "$*"; }
warn() { printf '\033[0;33mwarn:\033[0m %s\n' "$*" >&2; }
die()  { printf '\033[0;31merror:\033[0m %s\n' "$*" >&2; exit 1; }

run() {
  if [[ "${DRY_RUN}" -eq 1 ]]; then
    printf '    [dry-run] %s\n' "$*"
  else
    "$@"
  fi
}

install_oh_my_zsh() {
  if [[ -d "${TARGET}/.oh-my-zsh" ]]; then
    log "oh-my-zsh already installed at ${TARGET}/.oh-my-zsh, skipping"
    return
  fi

  command -v curl >/dev/null 2>&1 || die "curl is required to install oh-my-zsh"

  log "installing oh-my-zsh"
  # --unattended: don't run zsh or change the login shell
  # --keep-zshrc: don't clobber .zshrc; we install our own below
  if [[ "${DRY_RUN}" -eq 1 ]]; then
    printf '    [dry-run] curl ohmyzsh install.sh | sh -s -- --unattended --keep-zshrc\n'
    return
  fi

  local installer
  installer="$(mktemp)"
  # shellcheck disable=SC2064
  trap "rm -f '${installer}'" RETURN
  curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -o "${installer}"
  RUNZSH=no CHSH=no KEEP_ZSHRC=yes sh "${installer}" --unattended --keep-zshrc
}

backup() {
  local dest="$1" name="$2"
  [[ -e "${dest}" || -L "${dest}" ]] || return 0

  run mkdir -p "${BACKUP_DIR}"
  log "backing up existing ${name} to ${BACKUP_DIR}/${name}"
  run rm -rf "${BACKUP_DIR}/${name}"
  run cp -R "${dest}" "${BACKUP_DIR}/${name}"
}

install_dotfiles() {
  local name src dest
  for name in "${DOTFILES[@]}"; do
    src="${DOTFILES_DIR}/${name}"
    dest="${TARGET}/${name}"

    if [[ ! -e "${src}" ]]; then
      warn "${name} not found in ${DOTFILES_DIR}, skipping"
      continue
    fi

    if [[ -e "${dest}" || -L "${dest}" ]] && [[ "${FORCE}" -eq 0 && "${DRY_RUN}" -eq 0 ]]; then
      read -r -p "${dest} exists. Replace it? [y/N] " reply </dev/tty || reply=n
      case "${reply}" in
        [yY]*) ;;
        *) log "skipping ${name}"; continue ;;
      esac
    fi

    backup "${dest}" "${name}"

    log "installing ${name} -> ${dest}"
    if [[ -d "${src}" ]]; then
      # Merge into the destination (matters for .oh-my-zsh, which the
      # installer above may have just created).
      run mkdir -p "${dest}"
      run cp -R "${src}/." "${dest}/"
    else
      run cp "${src}" "${dest}"
    fi
  done
}

main() {
  while [[ $# -gt 0 ]]; do
    case "$1" in
      -n|--dry-run) DRY_RUN=1 ;;
      -f|--force)   FORCE=1 ;;
      -h|--help)    usage; exit 0 ;;
      *)            die "unknown option: $1 (try --help)" ;;
    esac
    shift
  done

  [[ "${DRY_RUN}" -eq 1 ]] && log "dry run — no changes will be made"

  log "dotfiles source: ${DOTFILES_DIR}"
  log "install target:  ${TARGET}"

  install_oh_my_zsh
  install_dotfiles

  log "done. start a new shell (or run 'exec zsh') to pick up the changes."
  if [[ "$(basename "${SHELL:-}")" != "zsh" ]]; then
    warn "your login shell is ${SHELL:-unknown}; run 'chsh -s \$(which zsh)' to switch to zsh"
  fi
}

main "$@"
