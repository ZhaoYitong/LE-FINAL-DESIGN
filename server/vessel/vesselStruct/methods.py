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


