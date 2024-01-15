import requests
import pandas as pd
from bs4 import BeautifulSoup
import json
import re

url = 'https://deadbydaylight.fandom.com/wiki/Perks'
data = requests.get(url).text
soup = BeautifulSoup(data, 'html.parser')

tables = soup.find_all('table')

tables = soup.find_all('table')
table = soup.find('table', class_= 'wikitable sortable')

df = pd.DataFrame (columns = ['name', 'description', 'character'])
perkList = []
for row in table.tbody.find_all('tr'):
  # print(row)
  columns = row.find_all('th')

  img_url = ''
  description = ''
  if(columns != []):
    img_cell = columns[0].find_all('img')
    for img in img_cell:
      img_url = img['data-src']
    # name_with_typos = columns[1].text.strip()
    # name_fixElodie = re.sub('\u00c9', 'E', name_with_typos)
    #will Elodie be displayed correctly?
    name =  columns[1].text.strip()

    character = columns[2].text.strip()


  column_cells = row.find_all('td')
  for cell in column_cells:
    div = cell.find('div', class_='formattedPerkDesc')

    if div:
        description_with_newlines = div.text.strip()
        description_without_newlines = re.sub(r'\n', ' ', description_with_newlines)
        description_citation_corrected = re.sub(r'\u2014', '-', description_without_newlines)
        description_percentage_fixed = re.sub(r'\u00a0', ' ', description_citation_corrected)
        description = re.sub(r'\\+', '',  description_percentage_fixed)

  perk = {"name": name, "character":character, "img_url":img_url, "description" : description}
  perkList.append(perk)

nested_json = {"perks": perkList}

json_string = json.dumps(nested_json, indent = 4)
# print(json_string)

# Specify the file path where you want to save the JSON data
file_path = "survivor_perks.json"

# Open the file in write mode and use json.dump() to write the data
with open(file_path, 'w') as json_file:
    json.dump(nested_json, json_file, indent = 4)

print("JSON data has been exported to:", file_path)






