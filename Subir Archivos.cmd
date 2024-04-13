del /s *.fla

FOR /d /r %%p IN (".Recursos") DO rmdir "%%p" /s /q
FOR /d /r %%p IN (".vscode") DO rmdir "%%p" /s /q



git add -A

git commit -m "cambios"

git pull

git push origin master

pause