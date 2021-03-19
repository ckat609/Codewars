"""
"""

def get_sum(a,b):
    number=sorted([a,b])
    if a==b:
        print(a)
    else:
        print(sum([i for i in range(number[0], number[1]+1)]))

get_sum(1,0)
get_sum(1,2)
get_sum(0,1)
get_sum(1,1)
get_sum(-1,0)
get_sum(-1,2)