import re

search_res = re.finditer('e', 'At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.')
for match in search_res:
    print(match.start(), match.end())