;;; scala-mode-autoloads.el --- automatically extracted autoloads
;;
;;; Code:
(add-to-list 'load-path (or (file-name-directory #$) (car load-path)))

;;;### (autoloads nil "scala-mode" "scala-mode.el" (22703 5949 0
;;;;;;  0))
;;; Generated autoloads from scala-mode.el

(autoload 'scala-mode:set-scala-syntax-mode "scala-mode" "\
Sets the syntax-table and other realted variables for the current buffer to those of scala-mode. Can be used to make some other major mode (such as sbt-mode) use scala syntax-table.

\(fn)" nil nil)

(autoload 'scala-mode:goto-start-of-code "scala-mode" "\
Go to the start of the real code in the file: object, class or trait.

\(fn)" t nil)

(autoload 'scala-mode "scala-mode" "\
Major mode for editing scala code.

When started, runs `scala-mode-hook'.

\\{scala-mode-map}

\(fn)" t nil)

(add-to-list 'auto-mode-alist '("\\.\\(scala\\|sbt\\)\\'" . scala-mode))

(modify-coding-system-alist 'file "\\.\\(scala\\|sbt\\)\\'" 'utf-8)

;;;***

;;;### (autoloads nil nil ("ob-scala.el" "scala-mode-fontlock.el"
;;;;;;  "scala-mode-imenu.el" "scala-mode-indent.el" "scala-mode-lib.el"
;;;;;;  "scala-mode-map.el" "scala-mode-paragraph.el" "scala-mode-pkg.el"
;;;;;;  "scala-mode-prettify-symbols.el" "scala-mode-syntax.el")
;;;;;;  (22703 5949 59655 0))

;;;***

;; Local Variables:
;; version-control: never
;; no-byte-compile: t
;; no-update-autoloads: t
;; End:
;;; scala-mode-autoloads.el ends here
