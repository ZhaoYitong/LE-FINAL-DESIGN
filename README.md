# LE-FINAL-DESIGN
coding about ACT

## python virtual environment
### Windows

```bash
server\vessel\vessel-env\Scripts\activate
```
### deactivate virtual environment
```bash
deactivate
```
## git instruction

### pull

```bash
git clone <project>
```

### establish new branch
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
