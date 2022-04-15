import sqlite3

def savienot():
  DB = sqlite3.connect('top.db')
  return DB.cursor()
  

def top():
  SQL = savienot()
  SQL.execute("SELECT * FROM rezultati")
  rezultati = SQL.fetchall()
  dati = []
  for rez in rezultati:
    dati.append({
      "id":rez[0],
      "vards":rez[1],
      "vecums":rez[2],
      "laiks":rez[3],
      "punkti":rez[4],
      "datums":rez[5],

    })

  # print(dati)
  return dati

def pievienot(dati):
  SQL = savienot()
  SQL.execute("INSERT INTO rezultati (vards, vecums, laiks, punkti, datums) VALUES (:vards, :vecums, :laiks, :punkti, :datums)", {'vards': dati['vards'], 'vecums': dati['vecums'], 'laiks':dati['laiks'], 'punkti':dati['punkti'], 'datums':dati['datums']})