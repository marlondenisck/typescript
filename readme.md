Para rodar um projeto utilizando a extensão **.ts**
deve-se converte-lo para **.js**

utilize ```yarn tsc --init``` para iniciar um arquivo de config e depois  ```yarn tsc```
assim ele irá criar um arquivo js normalmente para utilizar

Voce pode conferir os binarios como por exemplo o tsc em ```node_modules/.bin```

Pode-se utilizar o arquivo de configuração  do typescript para que os arquivos compilados em .js fiquem em outra pasta.
Descomente o parâmetro ```outDir``` e configure do seu modo.