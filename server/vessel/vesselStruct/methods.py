# bay_index to num
def index_to_num(bay_list):
    arr = []
    for i in bay_list:
        if i[0] == '0':
            i = int(i[1])
        else:
            i = int(i)
        arr.append(i)
    return arr


# num to bay_index
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


# index: min to max
def create_engine_index(eng_pos, eng_wid):
    if eng_pos % 2 == 0 or eng_pos < 0:
        print("engine_position is illegal!")
        return False
    else:
        temp_list = []
        eng_body_list = []
        for k in range(0, eng_wid):
            real_num = 2*k + eng_pos
            temp_list.append(real_num)
        for m in temp_list:
            eng_body_list.append(m)
        return eng_body_list


def create_index_list(max_lay_num):
    lay_list = []
    for i in range(0, max_lay_num):
        lay_list.append(num_to_index((i+1)*2))
    return lay_list


#print(create_index_list(6, 4))