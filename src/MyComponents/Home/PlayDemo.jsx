import React, { useState } from 'react'
import c from '../../images/bgs/c.png'
import cpp from '../../images/bgs/cpp.png'
import py from '../../images/bgs/python.png'
import figma_1 from '../../images/micro/figma_1.png'
import light from '../../images/micro/light.png'
import dark from '../../images/micro/moon.png'
import next from '../../images/micro/right-arrow.png'
import copy from '../../images/micro/copy.png'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import AceEditor from 'react-ace'
import braces from '../../images/micro/braces.png'

import "ace-builds/src-noconflict/mode-c_cpp"
import "ace-builds/src-noconflict/mode-python"

export default function PlayDemo() {
    const [theme, setTheme] = useState(true)
    const [code, setCode] = useState(`//PROGRAM TO FIND INVISIBLE CHARACTERS IN C
#include <stdio.h>
#include <stdbool.h>

bool containsInvisibleChars(const char *str) {
    for (int i = 0; str[i]; i++) // Loop through the characters in the string
        if (str[i] < 32 || str[i] > 126) // Check if character is invisible
            return true; // Invisible character found
    return false; // No invisible characters
}

int main() {
    char input[1000];
    printf("Enter a string: ");
    fgets(input, sizeof(input), stdin);
    printf(containsInvisibleChars(input) ? "Contains invisible characters.\n" : "No invisible characters.\n");
    return 0;
}
    `)
    const [language, setLanguage] = useState('c')
    const navigate = useNavigate('')

    return (
        <div className='flex flex-col items-center gap-1 mt-16'>
            <div className="heading text-3xl font-semibold text-slate-700 flex flex-col justify-center items-center">
                <img src={braces} className='w-8 h-8' alt="" />
                Code with Our Dynamic Code Editor
            </div>
            <div className="intro text-slate-600 w-4/6 font-semibold text-sm flex justify-center items-center pt-3 pb-4 gap-3">
                <img className='w-32 h-32 rounded-full pl-1' src={figma_1} alt="" />
                <div span className='px-4' >
                    You can write, compile and execute code on the site itself without any need to setup environment in your system, we provide services to run c, cpp, java, python and javascript and also we provide a web editor to write html, css and javascript code.You can try our editor in just a single click and collab with your friends making code more easy.It uses the monaco editor used by the visual studio code, Happy coding.
                </div >
            </div >
            <div className="buttons mt-4 flex justify-between items-center px-2 w-4/6">
                <div className='flex gap-1'>
                    <button className={`first-line:langButton ${language === 'c' ? 'background-grad' : 'bg-gray-300'} cpp w-24 flex justify-center items-center gap-2 text-white font-semibold text-sm px-1 py-2 rounded-sm`} onClick={() => {
                        setLanguage('c')
                        setCode(`//PROGRAM TO FIND INVISIBLE CHARACTERS IN C
#include <stdio.h>
#include <stdbool.h>

bool containsInvisibleChars(const char *str) {
    for (int i = 0; str[i]; i++) // Loop through the characters in the string
        if (str[i] < 32 || str[i] > 126) // Check if character is invisible
            return true; // Invisible character found
    return false; // No invisible characters
}

int main() {
    char input[1000];
    printf("Enter a string: ");
    fgets(input, sizeof(input), stdin);
    printf(containsInvisibleChars(input) ? "Contains invisible characters.\n" : "No invisible characters.\n");
    return 0;
    }
}`)
                    }}>
                        <img className='w-5 h-5' src={c} alt="" />
                        C
                    </button>
                    <button className={`langButton py w-24 flex justify-center items-center gap-2 ${language === 'cpp' ? 'background-grad' : 'bg-gray-300'} text-white font-semibold text-sm px-1 py-2 rounded-sm`} onClick={() => {
                        setLanguage('cpp')
                        setCode(`//PROGRAM TO FIND NEXT PALINDROME NUMBER IN C++
#include <iostream>
#include <string>

bool isPalindrome(const std::string& s) {
    int l = 0, r = s.length() - 1;
    while (l < r)
        if (s[l++] != s[r--])
            return false;
    return true;
}

int main() {
    int n;
    std::cin >> n;
    while (++n)
        if (isPalindrome(std::to_string(n))) { // Check if the incremented number is a palindrome
            std::cout << n; // Print the next palindrome
            return 0; // Exit the program
        }
}`)
                    }}>
                        <img className='w-5 h-5' src={cpp} alt="" />
                        C++
                    </button>
                    <button className={`langButton java w-24 flex justify-center items-center gap-2 ${language === 'python' ? 'background-grad' : 'bg-gray-300'} text-white font-semibold text-sm pl-1 pr-[0.32rem] py-2 rounded-sm`} onClick={() => {
                        setLanguage('python')
                        setCode(`#PROGRAM TO COMPUTE WORD FREQUENCY OF A STRING IN PYTHON
import string
from collections import defaultdict

def count_word_frequency(text):
    words = text.lower().split() # Split text into words
    word_count = defaultdict(int)
    for word in words: # Loop through the words
        word_count[word.strip(string.punctuation)] += 1 # Remove punctuation and count words

    return word_count

if __name__ == "__main__":
    with open("text.txt", "r") as file:
        text = file.read() # Read text from file

    word_frequency = count_word_frequency(text) # Count word frequency

    for word, frequency in word_frequency.items(): # Loop through word frequencies
        print(f"{word}: {frequency}") # Print word and its frequency`)
                    }}>
                        <img className='w-5 h-5' src={py} alt="" />
                        Python
                    </button>
                </div>
                <div className='remBtns flex justify-center items-center gap-1 '>
                    <button id='copy' className="text-slate-700 font-semibold text-xs px-3 py-2 flex justify-center rounded-md" onClick={() => {
                        toast.success("Code copied!")
                        navigator.clipboard.writeText(code)
                    }}>
                        <img className='w-5 h-5' src={copy} alt="" />
                    </button>
                    <img className='bg-gray-300 p-2 rounded-full w-9 h-9 cursor-pointer' onClick={() => {
                        setTheme(!theme)
                        toast.success("switched theme")
                    }} src={theme ? light : dark} alt="" />
                    <button className='background-grad text-white px-3 py-2 rounded-md text-sm font-semibold ml-3 flex justify-center gap-2 items-center' onClick={() => {
                        navigate("/editor")
                    }}>
                        Editor
                        <img className='w-3 h-3' src={next} alt="" />
                    </button>
                </div>
            </div>
            <div id className='w-[66%] h-96 rounded-lg mt-2 shadow shadow-slate-300'>
                <AceEditor
                    style={{ width: "calc(100%)", height: "calc(100%)", borderRadius: "6px" }}
                    fontSize={14}
                    wrapEnabled={true}
                    theme={theme ? 'dracula' : 'xcode'}
                    mode={language !== "python" ? 'c_cpp' : 'python'}
                    value={code}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    setOptions={{
                        useWorker: false,
                    }}
                />
            </div>
        </div >
    )
}
