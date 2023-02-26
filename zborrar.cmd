
FOR /d /r . %d IN (".Recursos") DO  @echo  @IF EXIST "%d" rd /s /q "%d" 
 FOR /d /r . %d IN (".vscode") DO @IF EXIST "%d" rd /s /q "%d" 

 del /s *.fla