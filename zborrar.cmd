
FOR /d /r . %d IN (".Recursos") DO   @IF EXIST "%d" rd /s /q "%d" 

del /s *.fla
