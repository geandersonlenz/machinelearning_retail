import urllib3
import json
http = urllib3.PoolManager()

r = http.request(
     'GET',
     'https://api.calendario.com.br/?json=true&ano=2018&ibge=3550308&token=bHVjYXNkZWxhdnJhcGludG9AZ21haWwuY29tJmhhc2g9MTUyMzA1OTI2')
response = json.loads(r.data.decode('utf-8'))

lista_feriados = []
for x in response:
    if x['type'] in ('Feriado Nacional'):
        y = {'key':x['date'],'value':x['name']}
        lista_feriados.append(y)

k_lista_feriados = []
for x in lista_feriados:
    y = x['key']
    k_lista_feriados.append(y)

