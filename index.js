const fs = require('fs');
const qrcode = require('qrcode-terminal');
const { Client ,LegacySessionAuth ,LocalAuth} = require('whatsapp-web.js');
const SESSION_FILE_PATH = './session.json';

// Load the session data if it has been previously saved
let sessionData;
if(fs.existsSync(SESSION_FILE_PATH)) {
    sessionData = require(SESSION_FILE_PATH);
} 
// const client = new Client({
//     authStrategy: new LegacySessionAuth({
//         session: sessionData
//     })
// });

const client = new Client({
    authStrategy: new LocalAuth()
});
 
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
    client.getChats().then((chats)=>{
         const myGrp = chats.find((chat)=> chat.name == `"ALL batches of NS"`);
         console.log(myGrp);
        //  client.sendMessage(myGrp.id._serialized ,"hello this indra's bot created using Nodejs");
         client.on('message',msg=>{
            if(msg.body == "#indra"){
                msg.reply(`This features are created by Indra❤️

you can connect me on linkedin
linkedin - https://www.linkedin.com/in/indra-kumar-252aa2125/,

send message bellow hashtag to get Questions

#dsa1  - Avaliable
#dsa2  - Avaliable
#js  -  comming soon 
#react - comming soon 
#nodejs - comming soon 
#daytech - comming soon
#hiring - commning soon


`); }

if(msg.body == "#dsa1"){
    msg.reply(`

created by Indra❤️  
you can connect me on linkedin
linkedin - https://www.linkedin.com/in/indra-kumar-252aa2125/,



    1.What is Hashing -> Answered..
    2. What is the best algo for sorting .. Why its best and what is the best avg and worst case time complexcity -> answered
    3. What is Array -> Answered
    4. Can we store diff data type in one array-> answered.
    5. [Easy] : Largest Number At Least Twice of Others ..
    https://leetcode.com/problems/largest-number-at-least-twice-of-others/ 
    : Done (With some hints)
    6. [Easy] : . Two Sum
    https://leetcode.com/problems/two-sum/ : answered..
    1. Write a .program to check weather a number is prime or not - done..
2. [easy] : https://leetcode.com/problems/counting-words-with-a-given-prefix/ - done.
3.[easy] : print second max frm given array - done.
4. Explain the logic of quick sort.
5 . What is diff btw primitives and non primitive in java.
6 . what is diff btw stack and queue...
Two sum
Find frequency of element in sorted and unsorted array.
DSA 1->Medium Level

1. Write a program to find the length longest palindromic substring from given string.
Ex: "babac"
O/P: 3 (aba,bab) both are valid answers.

2. Given a array where every element is repeated twice except one find that number.

Ex: 1 1 2
O/P: 2
DSA 1->Hard Level

1. Find Missing number
2. Find Missing and repeating number


DSA1-> Easy Level

Sorting? Different sorting algorithms?
Different techniques of Searching?

Implement merge sort
Implement binary search

merge sort [Ans]
max sum sub-array [Ans]
quick sort [Ans]
binary search upper bound [Ans]
prime in array [Ans]
DSA 1-> Challenge Level

Given an array from elements in the range of 1  to n. The array has all distinct numbers with n - 2 elements. Find the two missing elements.
 Given an array of integers, find the first repeating element in it. We need to find the element that occurs more than once and whose index of the first occurrence is smallest.

 DSA 1->Medium Level


1. given an array and a k, find the pairs which will add upto a given k
input --
12, 3, 7, 6, 9, 8
k = 20
output --
12, 3
7, 8
6, 9

2. given a string, write the logic for compressing it
input --
input --
aaabbcccddeef
output --
a3b2c3d2e2f
    `); }

    if(msg.body == "#dsa2"){
        msg.reply(`created by Indra❤️ 

you can connect me on linkedin
linkedin - https://www.linkedin.com/in/indra-kumar-252aa2125/,




DSA 2->Medium Level

1. https://leetcode.com/problems/reorder-list/ -done
DSA -2 ->  Hard Level

1.. https://leetcode.com/problems/valid-parentheses/
2.. https://leetcode.com/problems/reverse-words-in-a-string/
3.. https://leetcode.com/problems/intersection-of-two-linked-lists/

DSA 2-> Medium Level

what is difference between array and linked list.
example when to use linked list or array/array list.
advantages and disadv of Linked list.

https://leetcode.com/problems/search-in-rotated-sorted-array/
https://leetcode.com/problems/reverse-linked-list-ii/

DSA 2->Medium Level


Sort the array
Count the elements in Linked list
Reverse the linked list from the middle

DSA 2->Medium Level


1) What is Data Structure? Explain.
2) Describe the types of Data Structures?
3) List the area of applications of Data Structure.
4) Explain Linked List in short.
5) How many types of Linked List exist?
6) Explain a Singly Linked List in short.
7) What do you understand about the Doubly Linked List?
8) Explain a Multiply Linked List in short.
9) How will you explain the Circular Linked List?
10) How many pointers are necessary to implement a singly Linked List?
11) How can you represent a linked list node?
12) Which type of memory allocation is referred to for Linked List?
13) What do you know about traversal in linked lists?
14) What are the main differences between the Linked List and Linear Array?
15) Mention a few applications of Linked Lists?
16) What are the advantages of linked lists?
17) explain binary search?
18) explain linear search?
19) Write a program for Given a linked list, write a function to reverse every alternate k nodes (where k is an input to the function) in an efficient way. Give the complexity of your algorithm.
Inputs: 1->2->3->4->5->6->7->8->9->NULL and k = 3

DSA 2-> Hard Level

1) WAP to check the linked list is palindrome or not ?


2) Problem Statement: Given a set of strings, find the longest common prefix.
Examples: 
 

Input: {"geeksforgeeks", "geeks", "geek", "geezer"}
Output: "gee"

Input: {"apple", "ape", "april"}
Output: "ap"

DSA 2->Challenge Level

WAP to check the linked list is palindrome or not

Write a program that takes a list sorted in non-decreasing order and deletes any duplicate nodes from the list. The list should only be traversed once. 
For example if the linked list is 11->11->11->21->43->43->60 then removeDuplicates() should convert the list to 11->21->43->60.

DSA 2-> Easy Level

An element in a sorted array can be found in O(log n) time via binary search. But suppose we rotate an ascending order sorted array at some pivot unknown to you beforehand. So for instance, 1 2 3 4 5 might become 3 4 5 1 2. Devise a way to find an element in the rotated array in O(log n) time.
Example:  
Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3}; key = 3
Output : Found at index 8

Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3}; key = 30
Output : Not found

Input : arr[] = {30, 40, 50, 10, 20}; key = 10  
Output : Found at index 3

Given an n x n matrix and a number x, find the position of x in the matrix if it is present in it. Otherwise, print “Not Found”. In the given matrix, every row and column is sorted in increasing order. The designed algorithm should have linear time complexity.
Input: mat[4][4] = { {10, 20, 30, 40},
                      {15, 25, 35, 45},
                      {27, 29, 37, 48},
                      {32, 33, 39, 50}};
              x = 29
Output: Found at (2, 1)
Explanation: Element at (2,1) is 29
DSA 2-> Challenge Level


FInd middle element in LinkedList
Detect where cycle do exists in LinkedList
Find the starting of the loop if loop does exist
DSA 2-> Medium Level


1. Difference between Linear search and binary search?
2. Difference between Arrays and Linked list?
3. Implementation of Queue using stack ?
4. Check if the given list is palindrome or not?
5. Reverse a linked list?
6. For implementing a Linked List how many pointer are necessary ?
7. What is stack and queue?
DSA 2-> Hard Level

Given a string in the form of parenthesis opening and closing. Find if it is a valid in mathematical form.
`); }




         })
    })
  
});


client.on('authenticated', (session) => {
    // sessionData = session;
    // fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
    //     if (err) {
    //         console.error(err);
    //     }
    // });
});
 

client.initialize();
 