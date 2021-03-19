def add_letters(*args):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    number = [alphabet.index(number)+1 for number in args]
    calc_numbers = sum(number)%26
    print(sum(number)%26)
    return(alphabet[calc_numbers-1])


add_letters('a', 'b', 'c')
add_letters('z')
add_letters('a', 'b')
add_letters('c')
add_letters('z', 'a')
add_letters('y', 'c', 'b')
add_letters()