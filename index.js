const {Telegraf}=require("telegraf");


const bot = new Telegraf("7022882317:AAF_1oLxHMPnQJK2s01SfpLJiEui04y7W64");
let binarysearchjs = `
def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        # Check if target is present at mid
        if arr[mid] == target:
            return mid

        # If target is greater, ignore left half
        elif arr[mid] < target:
            left = mid + 1

        # If target is smaller, ignore right half
        else:
            right = mid - 1

    # If target is not present in the array
    return -1

# Example usage:
arr = [2, 3, 4, 10, 40]
target = 10
result = binary_search(arr, target)

if result != -1:
    print(f"Element {target} is present at index {result}")
else:
    print(f"Element {target} is not present in the array")

`;
bot.start((ctx)=> ctx.reply('Welcome to new coding bot from sanjeev'));
bot.command('binarysearchjs',(ctx)=>ctx.reply(binarysearchjs));

bot.on("sticker",(ctx)=>ctx.reply('😍'));

bot.launch();