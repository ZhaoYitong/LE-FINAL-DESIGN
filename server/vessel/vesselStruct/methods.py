# bay_index to int
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


def combined_bay_list(bay_inch20s, bay_inch40s):
    bay_list = []
    count = 0
    is_jump = False
    for i in bay_inch20s:
        if is_jump:
            is_jump = False
            continue
        for j in bay_inch40s:
            if i+1 == j:
                count += 1
                bay_list.append(
                    {
                        'id': count,
                        'type': "combine",
                        'bayInch20s': [
                            {
                                'index': num_to_index(j-1),
                            },
                            {
                                'index': num_to_index(j+1),
                            },
                        ],
                        'bayInch40': [
                            {
                                'index': num_to_index(j),
                            },
                        ],
                    },
                )
                is_jump = True
                break
            elif j == bay_inch40s[-1] and i != j:
                count += 1
                bay_list.append({
                    'id': count,
                    'type': "single",
                    'bayInch20': [
                        {
                            'index': num_to_index(i),
                        }
                    ],
                })
                break
            else:
                continue
    return bay_list

# print('\n'.join('{}: {}'.format(*k) for k in enumerate(combined_bay_list(test_a, test_b))))