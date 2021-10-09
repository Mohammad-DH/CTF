export const Logic = (directory, input, change) => {
    let response;
    let oldDirectory;

    let reward = [
        "good job",
        "if you solved the puzzle you are a normal person",
        "not a hacker",

        'hackers do not solve the puzzle they break the puzzle',
        'if you think like a hacker you would understand that if you use the chrome developer tool',
        'you can see the javascript files and find the password ',
        'from the start this never was a crypto challenge',
        "it was a challenge to show how you are thinking",
        "*************************************************************************************************",
        'happy hacking',
        'made by Mohammad DH',
        'mohammaddh.com',
    ]

    let help = [
        "cd ...................................... Change Directory",
        "ls ...................................... List Files and Directories ",
        "cat ...................................... Concatenate ",
        "ctr + l ...................................... Clear ",
        "help ...................................... Help ",
    ]

    let Default = () => {
        switch (input) {
            case "help":
                operation({
                    res: help
                })
                break;
            case "cd ..":
                operation({
                    newD: "~"
                })
                break;
            case "cd..":
                operation({
                    newD: "~"
                })
                break;
            case "":
                break;

            default:
                operation({
                    res: ["Error : The command line argument is not valid", "type 'help' for more"]
                })
                break;
        }
    }

    let operation = ({
        res, newD
    }) => {
        oldDirectory = directory
        if (res) {
            response = res
        } else {
            response = [""]
        }

        if (newD) {
            change("directory", newD)
        }
    }

    switch (directory) {
        case "~":
            switch (input) {
                case "ls":
                    operation({
                        res: ["dir1", "dir2", "dir3", "readme.txt", "reward.txt"],
                    })
                    break;
                case "cd dir1":
                    operation({
                        newD: "dir1"
                    })
                    break;
                case "cd dir2":
                    operation({
                        newD: "dir2"
                    })
                    break;
                case "cd dir3":
                    operation({
                        newD: "dir3"
                    })
                    break;
                case "cat readme.txt":
                    operation({
                        res: ["take all the keys and put them together by their number", "key1+key2+key3 = password"]
                    })
                    break;
                case "cat reward.txt":
                    let pass = prompt("Enter the password");
                    if (pass === "think like a hacker") {
                        operation({
                            res: reward
                        })
                    } else {
                        operation({
                            res: [
                                "Wrong password",
                                pass
                            ]
                        })
                    }
                    break;
                default:
                    Default()
                    break;
            }
            break;
        case "dir1":
            switch (input) {
                case "ls":
                    operation({
                        res: ["challenge1.txt"]
                    })
                    break;
                case "cat challenge1.txt":
                    operation({
                        res: [
                            "This is the first key ",
                            "66 6c 61 67 20 69 73 20 68 69 64 64 65 6e 20 21 0a 61 73 20 77 65 27 76 65 20 63 6f 6d 65 20 54 6f 20 72 65 61 6c 69 7a 65 2c 20 74 48 65 20 49 64 65 61 20 74 68 61 74 20 73 65 63 75 72 69 74 79 20 73 74 61 72 74 73 20 61 4e 64 20 65 6e 64 73 20 77 69 74 68 20 74 68 65 20 70 75 72 63 68 61 73 65 20 6f 66 20 61 20 70 72 65 70 61 63 4b 61 67 65 64 20 66 69 72 65 77 61 6c 6c 20 69 73 20 73 69 6d 70 6c 79 20 6d 69 73 67 75 69 64 65 64 2e 20 2d 20 61 72 74 20 61 69 74 74 6d 61 6e 6e",
                            "break it"
                        ]
                    })
                    change("challenge1", true)
                    break;
                default:
                    Default()
                    break;
            }
            break;

        case "dir2":
            switch (input) {
                case "ls":
                    operation({
                        res: ["challenge2.txt"]
                    })
                    break;
                case "cat challenge2.txt":
                    operation({
                        res: [
                            "This is the second key ",
                            "d3JvbmcgbGluZQp3cm9uZyBsaW5lCndyb25nIGxpbmUKa2V5ID0gbGlrZSBhCndyb25nIGxpbmUKd3JvbmcgbGluZQp3cm9uZyBsaW5l",
                            "break it"
                        ]
                    })
                    change("challenge2", true)
                    break;
                default:
                    Default()
                    break;
            }
            break;
        case "dir3":
            switch (input) {
                case "ls":
                    operation({
                        res: ["challenge3.txt"]
                    })
                    break;
                case "cat challenge3.txt":
                    operation({
                        res: [
                            "This is the last key ",
                            "ZmlsbGVyIGZpbGxlciBmaWxsZXIgZmlsbGVyIEhBQ0tFUiBmaWxsZXIgZmlsbGVyIGZpbGxlciBmaWxsZXI=",
                            "break it"
                        ]
                    })
                    change("challenge3", true)
                    break;

                default:
                    Default()
                    break;
            }
            break;
        default:

            break;
    }


    return { response, oldDirectory }
}