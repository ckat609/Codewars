def swap_values(args):
    newArg = args[0]
    args[0] = args[1]
    args[1] = newArg

    print(args)
    return(args)


swap_values([1, 2])
