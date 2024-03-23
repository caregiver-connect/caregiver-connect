import pandas as pd

table = pd.read_csv("import_providers.csv")

print(table)

# remove extra 4 digits from zip+4 code
table['"zip"'] = table['"zip"'].str[:6]+'"'

# make phone numbers in format (###) ###-####
table['"phone_number"'] = table['"phone_number"'].astype(str)

for idx in table.index:
    nums = [i for i in [*table['"phone_number"'][idx]] if i.isdigit()]
    if len(nums) == 10:
        table.loc[idx, '"phone_number"'] = f'"({nums[0]}{nums[1]}{nums[2]}) {nums[3]}{nums[4]}{nums[5]}-{nums[6]}{nums[7]}{nums[8]}{nums[9]}"'
    elif len(nums) == 7:
        table.loc[idx, '"phone_number"'] = f'"{nums[0]}{nums[1]}{nums[2]}-{nums[3]}{nums[4]}{nums[5]}{nums[6]}"'

table.to_csv("import_providers.csv")