  # Commands I used throughout this task :
     1) mkdir
     2) cd
     3) ls
     4) pwd 
     5) cat 
     6) cp   
     7) tree
     8) find
     9) rm
     10) touch
     11) git branch -r
     12) git checkout <branch>
     13) git status, git add ., git commit -m "Commit Message"
     14) grep 
     15) code <fileName> or <filePath> (eg. code README.md, prevents the hassle of moving the cursor each time to open a file)
     16) mv <intialFilePath> <finalFilePath>
     17) nano <fileName> - ctrl + X, y.

  # Journey - 
  ## Part I :
   1) Used the tree command to list out the entire directory tree and files within
     2) Found the medallion.py file with the find command
     3) Running medallion.py enabled the read options for the parchment.txt file
     4) Found Statue of Marika.txt file
     5) Found engrave.txt and Voidgate.sh using tree and find commands
     6) Entered the code for the Voidgate.sh file i.e. : aHR0cHM6Ly9naXRo and proceeded to Part II
  ## Part II :
     1) Used the command : grep -r "holy\|good"  ~/amfoss-tasks/task-02/Terminal-Chaos/Arrakis-dex/
     2) Found Moonbloom and Mistveil as the only files containing both "holy" and "good"
     3) Applied the given algo and got the holy spell : LnnmknnlLhrsdhk
     2) Defeated KharnokTheBloodForged
     3) On using tree again, observed that  Celestial Veil Amulet.txt and LightBook.txt were the new files that appeared
     4) On using tree found two files engrave.txt and Voidgate.sh 
     5) Used the code from the Lightbook i.e. dWIuY29tL2FtYW5ze and got the output as : ub.com/amans
     6) The output partially completes some part of the site i.e. https://gith that was decoded 
        in the Voidgate.sh file in the main branch.
     7) Moved further to The-Dark-Realm-I
  
  ## Part III :
   1) Used the tree command in The-Dark-Realm-I's Arrakis-dex
     2) Found a file named chest1.py
     3) Ran the file, which then asked for a code
     4) Used the code of the Celestial Veil Amulet found in The-Light-Realm i.e. : CSigVmaroAn
     5) A new file named DarkBookI.txt appeared which gave a new code i.e. : GNhbGlidXIvVGVyb
     6) Found a new file named Celestial Veil Amulet.txt which gave the code : CSigVmaroAn
     7) Found a new file named LightBook.txt which gave the code : dWIuY29tL2FtYW5ze
     8) Moved to The-Dark-Realm-II
     9) Used the tree and find command to find chest2.py
     10) Ran the file and entered the code from the Celestial Veil Amulet i.e. : CSigVmaroAn
     11) The text file DarkBookI.txt changed to DarkBookII.txt
     12) Got the following code from the DarkBookII.txt : WluYWwtQ2hhb3MtR29kU3VpdGU=
  
  ## Part IV :
     1) Gathering the four codes : aHR0cHM6Ly9naXRo, dWIuY29tL2FtYW5ze, GNhbGlidXIvVGVyb, WluYWwtQ2hhb3MtR29kU3VpdGU=
     2) Obtained : https://github.com/amansxcalibur/Terminal-Chaos-GodSuite

  ## Part V : 
     1) Reached God-Suite
     2) Read through the commits
     3) Tried decoding the last given code : aHR0cHM6Ly9naXRodWIuY29tL2FuZ3JlemljaGF0dGVyYm94L1RvLXRoZS1zdGFycy1hbmQtcmVhbG1zLXVuc2Vlbg==
     4) Obtained the link to the new repository : https://github.com/angrezichatterbox/To-the-stars-and-realms-unseen
     5) Cloned the repo and ran the victory.py file to obtain the winning token.
