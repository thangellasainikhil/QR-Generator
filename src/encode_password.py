encryptDictionary = {

    0: '$', 1: 'C', 2: '>', 3: 'Y', 4: 'V', 5: '<', 6: 'D', 7: '(', 8: ')', 9: 'O', 10: 'P',
    11: ',', 12: '-', 13: 'B', 14: 'I', 15: 'J', 16: 'K', 17: 'L', 18: 'G', 19: 'M', 20: ']',
    21: '?', 22: 'S', 23: '[', 24: '}', 25: 'U', 26: '{', 27: 'H', 28: 'a', 29: 'b', 30: 'c',
    31: 'd', 32: 'e', 33: 'f', 34: 'g', 35: 'h', 36: '@', 37: 'j', 38: 'k', 39: 'l', 40: 'm',
    41: 'n', 42: '&', 43: 'p', 44: 'q', 45: 'r', 46: 's', 47: 't', 48: 'u', 49: 'v', 50: 'w',
    51: 'x', 52: 'y', 53: 'z', 54: 'A'

}


def encryptPassword(password):

    list_password = []

    for i in range(0, 6):

        list_password.append(int(password[i]))

    list_password.reverse()
    sum = 0

    for i in range(6):
        list_password[i] += sum
        sum = list_password[i]

    encryptedPassword = ''

    for i in range(6):

        encryptedPassword += encryptDictionary[list_password[i]]

    return encryptedPassword