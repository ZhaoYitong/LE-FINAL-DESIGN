#from django.test import TestCase
def index_to_num(bay_list):
    arr = []
    for i in bay_list:
        if i[0] == '0':
            i = int(i[1])
        else:
            i = int(i)
        arr.append(i)
    return arr


def num_to_index(val):
    if val < 10:
        return '0'+str(val)
    else:
        return str(val)


test_a = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37,
          39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69]
test_b = [2, 8, 14, 18, 40]

temp_list = []
new_temp = []
count = 0
count_range = len(test_b)
# TODO:
for ii in test_a:
    compare_count = 0
    for jj in test_b:
        if ii+1 == jj:
            new_temp.append(
                {
                    'id': '',
                    'type': "combine",
                    'bayInch20s': [
                        {
                            'index': num_to_index(jj-1),
                        },
                        {
                            'index': num_to_index(jj+1),
                        },
                    ],
                    'bayInch40': [
                        {
                            'index': num_to_index(jj),
                        },
                    ],
                },
            )
            break
        else:
            compare_count += 1
            continue


for i in test_b:
    left = i - 1
    right = i + 1
    temp_list.append({
        'seq': i,
        'type': 'combine',
        'bayInch20s': [
            {
                'index': num_to_index(left)
            },
            {
                'index': num_to_index(right)
            },
        ],
        'bayInch40': [
            {
                'index': num_to_index(i)
            },
        ]
    })
    test_a.remove(left)
    test_a.remove(right)
for j in test_a:
    temp_list.append({'seq': j, 'id': 1, 'type': "single", 'bayInch20': [{'index': num_to_index(j), }]})

print(temp_list)

temp_list.sort(key=lambda element: element['seq'])
print(temp_list)

data_bay = {
            'data': [
                {
                    'id': 1,
                    'type': "single",
                    'bayInch20': [
                        {
                            'index': '01',
                        }
                    ],
                },
                {
                    'id': 2,
                    'type': "combine",
                    'bayInch20s': [
                        {
                            'index': '03',
                        },
                        {
                            'index': '05',
                        },
                    ],
                    'bayInch40': [
                        {
                            'index': '04',
                        },
                    ],
                },
            ]
        }

