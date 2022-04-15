import sqlite3
import json

JSON = 'templates/rezultati.json'

DB = sqlite3.connect('top.db')
SQL = DB.cursor()

SQL.execute("""CREATE TABLE IF NOT EXISTS rezultati (
              id INTEGER NOT NULL UNIQUE,
              vards TEXT,
              vecums INTEGER,
              punkti INTEGER,
              datums TEXT,
              PRIMARY KET("id AUTOINCREMENT")
  )""")
 
with open(JSON, 'r', encoding="UTF-8") as f:
  dati = f.read()
  datiJson = json.loads(dati)

  for dati in datiJson: 
    SQL.execute("INSERT INTO rezultati (vards, vecums, laiks, punkti) VALUES (:vards, :vecums, :laiks, :punkti, :datums,)", {'vards': dati['vards'], 'vecums': dati['vecums'], 'laiks':dati['laiks'], 'punkti':dati['punkti'], 'datums':dati['datums']})

DB.commit()

SQL.execute("SELECT * FROM rezultati")
print(SQL.fetchall())
  
    
