# Initializing our blockchain list
blockchain = []


def get_last_blockchain_value():
    """ Returns the last blockchain of the current blockchain. """
    if len(blockchain) < 1:
        return None
    return blockchain[-1]

def add_tansaction(transaction_amount, last_transaction=[1]):
    """ Append a new value as well as the last blockchain value to the blockchain"""
    if last_transaction == None:
        last_transaction = [1]
    blockchain.append([last_transaction, transaction_amount])

def get_tansaction_value():
    """ Returns the input as an amount """
    return float(input('Your transaction amount please: '))

def get_user_choice():
    user_input = input("Your choice: ")
    return user_input

def print_blockchain_elements():
     # Output the blockchain list to the console
    for block in blockchain:
        print('Outputting Block')
        print(block)
    else:
        print('-' * 20)

def verify_chain():
    # block_index = 0
    is_valid = True
    for block_index in range(len(blockchain)):
        if block_index == 0:
            block_index += 1
            continue
        elif blockchain[block_index][0] == blockchain[block_index - 1]:
            is_valid = True
        else:
            is_valid = False
            break
    # for block in blockchain:
    #     if block_index == 0:
    #         block_index += 1
    #         continue
    #     if block[0] == blockchain[block_index - 1]:
    #         is_valid = True
    #     else: 
    #         is_valid = False
    #         break
    #     block_index += 1
    return is_valid

tx_amount = get_tansaction_value()
add_tansaction(tx_amount)

waiting_for_input = True

while waiting_for_input:
    print('Please choose')
    print('1: Add a new transaction value')
    print('2: Output the blockchain blocks')
    print('h: Manipulate the chain')
    print('q: Quit')
    user_choice = get_user_choice()
    if user_choice == '1':
        tx_amount = get_tansaction_value()
        add_tansaction(tx_amount, get_last_blockchain_value())
    elif user_choice == '2':
        print_blockchain_elements()
    elif user_choice == 'h':
        if len(blockchain) >= 1:
            blockchain[0] = [2]
    elif user_choice == 'q':
        waiting_for_input = False
    else:
        print("Input was invalid, please pick a value from the list")
    if not verify_chain():
        print_blockchain_elements()
        print('Invalid blockchain')
        break
else:
    print('User left!')

print('Done')