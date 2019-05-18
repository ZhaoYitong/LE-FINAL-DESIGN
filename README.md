# LE-FINAL-DESIGN

## virtual environment
### Win

```bash
server\vessel\vessel-env\Scripts\activate
```
### deactivate virtual environment
```bash
deactivate
```
## git

### pull

```bash
git clone <project>
```

### new branch
```bash
git checkout -b <branch-name> origin/master
```

### update

```bash
git pull --rebase  # Update local repository 

git status

git add . | git add <file-name>

git commit 

git push origin HEAD:master
```

### mysql 

#### dump
```bash
mysqldump -uroot -pPASSWORD --databases DB_NAME > temp.sql
```
    Note: dump whole database or whole table, use Navicat or workbench(GUI)

#### create 
```bash
source temp.sql
```


## License
[MIT](https://choosealicense.com/licenses/mit/)
