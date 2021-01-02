
function loadPlaybackData() {
    playbackData.comments = {"ev-0":[{"id":"commentId-0","displayCommentEvent":{"permanentRelevance":"never relevant","timestamp":1512677534975,"type":"CREATE DIRECTORY","eventSequenceNumber":0,"directoryPath":"/","createdByDevGroupId":"devGroupId-2","id":"ev-0","directoryId":"dirId-0","parentDirectoryId":null},"developerGroupId":"devGroupId-2","timestamp":1604290036092,"commentText":"This is a version of the poker program I wrote in a previous playback that will use threads running concurrently to speed up the playing of one million poker hands. <br><br>The threads will run on my two core laptop and should cut the amount of time required to run the program roughly in half.","selectedCodeBlocks":[],"imageURLs":[],"videoURLs":[],"audioURLs":[],"linesAbove":"3","linesBelow":"3","currentFilePath":"","viewableBlogText":"","commentTags":[],"questionCommentData":{"allAnswers":[],"correctAnswer":"","question":""}}],"ev-6634":[{"id":"commentId-2","displayCommentEvent":{"timestamp":1512677555612,"type":"INSERT","eventSequenceNumber":6634,"createdByDevGroupId":"devGroupId-2","id":"ev-6634","fileId":"fileId-0","character":"NEWLINE","previousNeighborId":"ev-6633","lineNumber":119,"column":61,"pastedEventId":null},"developerGroupId":"devGroupId-2","timestamp":1604290400903,"commentText":"This is a variation of a poker problem I wrote previously.<br><br>I have removed the tests and added code to play 1,000,000 hands of 5 card poker.<br><br>The screenshot has the program output along with the actual probabilities for 5 card poker from a Wikipedia page. <br>","selectedCodeBlocks":[{"fileId":"fileId-0","selectedText":"(play-a-lot-of-poker 1000000 5)","startRow":118,"startColumn":19,"endRow":118,"endColumn":50}],"imageURLs":["media/images/img_0.png","media/images/img_1.png"],"videoURLs":[],"audioURLs":[],"linesAbove":"0","linesBelow":"0","currentFilePath":"/pokerThreads.clj","viewableBlogText":"(print-frequencies (play-a-lot-of-poker 1000000 5) 1000000) ","commentTags":[],"questionCommentData":{"allAnswers":[],"correctAnswer":"","question":""}}],"ev-6649":[{"id":"commentId-3","displayCommentEvent":{"timestamp":1512677661581,"type":"INSERT","eventSequenceNumber":6649,"createdByDevGroupId":"devGroupId-2","id":"ev-6649","fileId":"fileId-0","character":")","previousNeighborId":"ev-6632","lineNumber":119,"column":66,"pastedEventId":null},"developerGroupId":"devGroupId-2","timestamp":1604290670093,"commentText":"I am curious about the performance of this code.<br><br>There is a function called <font face=\"Courier\">time</font> that prints the amount of time that a function takes to execute.<br><br>The output is in milliseconds. This run of the program took 11.2 seconds (1000 ms is equivalent to 1 second).<br><br>This is single threaded code. Next, I will make it multi-threaded.","selectedCodeBlocks":[{"fileId":"fileId-0","selectedText":"(time ","startRow":118,"startColumn":0,"endRow":118,"endColumn":6},{"fileId":"fileId-0","selectedText":") ","startRow":118,"startColumn":65,"endRow":118,"endColumn":67}],"imageURLs":["media/images/img_2.png"],"videoURLs":[],"audioURLs":[],"linesAbove":"0","linesBelow":"1","currentFilePath":"/pokerThreads.clj","viewableBlogText":"(time (print-frequencies (play-a-lot-of-poker 1000000 5) 1000000)) \n","commentTags":[],"questionCommentData":{"allAnswers":[],"correctAnswer":"","question":""}}],"ev-6696":[{"id":"commentId-4","displayCommentEvent":{"timestamp":1512693514483,"type":"INSERT","eventSequenceNumber":6696,"createdByDevGroupId":"devGroupId-2","id":"ev-6696","fileId":"fileId-0","character":"NEWLINE","previousNeighborId":"ev-6695","lineNumber":1,"column":44,"pastedEventId":null},"developerGroupId":"devGroupId-2","timestamp":1604290724047,"commentText":"I am going to use the <font face=\"Courier\">ExecutorService</font> to manage a thread pool so I need to import the <font face=\"Courier\">Executors</font> class from the concurrent package.","selectedCodeBlocks":[{"fileId":"fileId-0","selectedText":"(import '(java.util.concurrent Executors)) \n","startRow":0,"startColumn":0,"endRow":1,"endColumn":0}],"imageURLs":[],"videoURLs":[],"audioURLs":[],"linesAbove":"0","linesBelow":"0","currentFilePath":"/pokerThreads.clj","viewableBlogText":"(import '(java.util.concurrent Executors)) ","commentTags":[],"questionCommentData":{"allAnswers":[],"correctAnswer":"","question":""}}],"ev-6785":[{"id":"commentId-5","displayCommentEvent":{"timestamp":1512693603404,"type":"INSERT","eventSequenceNumber":6785,"createdByDevGroupId":"devGroupId-2","id":"ev-6785","fileId":"fileId-0","character":"s","previousNeighborId":"ev-6784","lineNumber":121,"column":81,"pastedEventId":null},"developerGroupId":"devGroupId-2","timestamp":1604290800976,"commentText":"This is a function that will break the work of playing poker into different threads.","selectedCodeBlocks":[{"fileId":"fileId-0","selectedText":"play-poker-in-threads","startRow":120,"startColumn":6,"endRow":120,"endColumn":27}],"imageURLs":[],"videoURLs":[],"audioURLs":[],"linesAbove":"0","linesBelow":"0","currentFilePath":"/pokerThreads.clj","viewableBlogText":"(defn play-poker-in-threads [num-hands-per-thread five-or-seven number-of-threads]) ","commentTags":[],"questionCommentData":{"allAnswers":[],"correctAnswer":"","question":""}},{"id":"commentId-6","displayCommentEvent":{"timestamp":1512693603404,"type":"INSERT","eventSequenceNumber":6785,"createdByDevGroupId":"devGroupId-2","id":"ev-6785","fileId":"fileId-0","character":"s","previousNeighborId":"ev-6784","lineNumber":121,"column":81,"pastedEventId":null},"developerGroupId":"devGroupId-2","timestamp":1604290850618,"commentText":"This is how many hands will be played by each thread.","selectedCodeBlocks":[{"fileId":"fileId-0","selectedText":"num-hands-per-thread","startRow":120,"startColumn":29,"endRow":120,"endColumn":49}],"imageURLs":[],"videoURLs":[],"audioURLs":[],"linesAbove":"0","linesBelow":"0","currentFilePath":"/pokerThreads.clj","viewableBlogText":"(defn play-poker-in-threads [num-hands-per-thread five-or-seven number-of-threads]) ","commentTags":[],"questionCommentData":{"allAnswers":[],"correctAnswer":"","question":""}},{"id":"commentId-7","displayCommentEvent":{"timestamp":1512693603404,"type":"INSERT","eventSequenceNumber":6785,"createdByDevGroupId":"devGroupId-2","id":"ev-6785","fileId":"fileId-0","character":"s","previousNeighborId":"ev-6784","lineNumber":121,"column":81,"pastedEventId":null},"developerGroupId":"devGroupId-2","timestamp":1604290885052,"commentText":"This says how many cards are in each hand, either 5 or 7.","selectedCodeBlocks":[{"fileId":"fileId-0","selectedText":"five-or-seven","startRow":120,"startColumn":50,"endRow":120,"endColumn":63}],"imageURLs":[],"videoURLs":[],"audioURLs":[],"linesAbove":"0","linesBelow":"0","currentFilePath":"/pokerThreads.clj","viewableBlogText":"(defn play-poker-in-threads [num-hands-per-thread five-or-seven number-of-threads]) ","commentTags":[],"questionCommentData":{"allAnswers":[],"correctAnswer":"","question":""}},{"id":"commentId-8","displayCommentEvent":{"timestamp":1512693603404,"type":"INSERT","eventSequenceNumber":6785,"createdByDevGroupId":"devGroupId-2","id":"ev-6785","fileId":"fileId-0","character":"s","previousNeighborId":"ev-6784","lineNumber":121,"column":81,"pastedEventId":null},"developerGroupId":"devGroupId-2","timestamp":1604290920963,"commentText":"This is how many threads will be created in the thread pool.","selectedCodeBlocks":[{"fileId":"fileId-0","selectedText":"number-of-threads","startRow":120,"startColumn":64,"endRow":120,"endColumn":81}],"imageURLs":[],"videoURLs":[],"audioURLs":[],"linesAbove":"0","linesBelow":"0","currentFilePath":"/pokerThreads.clj","viewableBlogText":"(defn play-poker-in-threads [num-hands-per-thread five-or-seven number-of-threads]) ","commentTags":[],"questionCommentData":{"allAnswers":[],"correctAnswer":"","question":""}}],"ev-7122":[{"id":"commentId-9","displayCommentEvent":{"timestamp":1512693856432,"type":"INSERT","eventSequenceNumber":7122,"createdByDevGroupId":"devGroupId-2","id":"ev-7122","fileId":"fileId-0","character":"NEWLINE","previousNeighborId":"ev-7121","lineNumber":125,"column":46,"pastedEventId":null},"developerGroupId":"devGroupId-2","timestamp":1604291015820,"commentText":"Here I am creating a pool of threads.","selectedCodeBlocks":[{"fileId":"fileId-0","selectedText":"pool (Executors/newFixedThreadPool number-of-threads)","startRow":121,"startColumn":10,"endRow":121,"endColumn":63}],"imageURLs":[],"videoURLs":[],"audioURLs":[],"linesAbove":"1","linesBelow":"3","currentFilePath":"/pokerThreads.clj","viewableBlogText":"(defn play-poker-in-threads [num-hands-per-thread five-or-seven number-of-threads] \n    (let [pool (Executors/newFixedThreadPool number-of-threads) \n          tasks (repeat number-of-threads (fn [] (play-a-lot-of-poker num-hands-per-thread five-or-seven))) \n          poker-results (map (fn [future] (.get future)) (.invokeAll pool tasks))] \n        (apply merge-with + poker-results))) ","commentTags":[],"questionCommentData":{"allAnswers":[],"correctAnswer":"","question":""}},{"id":"commentId-10","displayCommentEvent":{"timestamp":1512693856432,"type":"INSERT","eventSequenceNumber":7122,"createdByDevGroupId":"devGroupId-2","id":"ev-7122","fileId":"fileId-0","character":"NEWLINE","previousNeighborId":"ev-7121","lineNumber":125,"column":46,"pastedEventId":null},"developerGroupId":"devGroupId-2","timestamp":1604291045007,"commentText":"I need a sequence of task functions to hand off to the thread pool.","selectedCodeBlocks":[{"fileId":"fileId-0","selectedText":"tasks","startRow":122,"startColumn":10,"endRow":122,"endColumn":15}],"imageURLs":[],"videoURLs":[],"audioURLs":[],"linesAbove":"2","linesBelow":"2","currentFilePath":"/pokerThreads.clj","viewableBlogText":"(defn play-poker-in-threads [num-hands-per-thread five-or-seven number-of-threads] \n    (let [pool (Executors/newFixedThreadPool number-of-threads) \n          tasks (repeat number-of-threads (fn [] (play-a-lot-of-poker num-hands-per-thread five-or-seven))) \n          poker-results (map (fn [future] (.get future)) (.invokeAll pool tasks))] \n        (apply merge-with + poker-results))) ","commentTags":[],"questionCommentData":{"allAnswers":[],"correctAnswer":"","question":""}},{"id":"commentId-11","displayCommentEvent":{"timestamp":1512693856432,"type":"INSERT","eventSequenceNumber":7122,"createdByDevGroupId":"devGroupId-2","id":"ev-7122","fileId":"fileId-0","character":"NEWLINE","previousNeighborId":"ev-7121","lineNumber":125,"column":46,"pastedEventId":null},"developerGroupId":"devGroupId-2","timestamp":1604291098629,"commentText":"Here I use the <font face=\"Courier\">repeat</font> function to create multiple copies of the same function.<br><br>This creates a sequence of identical functions one for each thread.","selectedCodeBlocks":[{"fileId":"fileId-0","selectedText":"(repeat number-of-threads ","startRow":122,"startColumn":16,"endRow":122,"endColumn":42}],"imageURLs":[],"videoURLs":[],"audioURLs":[],"linesAbove":"3","linesBelow":"3","currentFilePath":"/pokerThreads.clj","viewableBlogText":" \n(defn play-poker-in-threads [num-hands-per-thread five-or-seven number-of-threads] \n    (let [pool (Executors/newFixedThreadPool number-of-threads) \n          tasks (repeat number-of-threads (fn [] (play-a-lot-of-poker num-hands-per-thread five-or-seven))) \n          poker-results (map (fn [future] (.get future)) (.invokeAll pool tasks))] \n        (apply merge-with + poker-results))) \n ","commentTags":[],"questionCommentData":{"allAnswers":[],"correctAnswer":"","question":""}},{"id":"commentId-12","displayCommentEvent":{"timestamp":1512693856432,"type":"INSERT","eventSequenceNumber":7122,"createdByDevGroupId":"devGroupId-2","id":"ev-7122","fileId":"fileId-0","character":"NEWLINE","previousNeighborId":"ev-7121","lineNumber":125,"column":46,"pastedEventId":null},"developerGroupId":"devGroupId-2","timestamp":1604291141232,"commentText":"This is the function that will be repeated and collected in the sequence called tasks.","selectedCodeBlocks":[{"fileId":"fileId-0","selectedText":"(fn [] (play-a-lot-of-poker num-hands-per-thread five-or-seven))","startRow":122,"startColumn":42,"endRow":122,"endColumn":106}],"imageURLs":[],"videoURLs":[],"audioURLs":[],"linesAbove":"2","linesBelow":"2","currentFilePath":"/pokerThreads.clj","viewableBlogText":"(defn play-poker-in-threads [num-hands-per-thread five-or-seven number-of-threads] \n    (let [pool (Executors/newFixedThreadPool number-of-threads) \n          tasks (repeat number-of-threads (fn [] (play-a-lot-of-poker num-hands-per-thread five-or-seven))) \n          poker-results (map (fn [future] (.get future)) (.invokeAll pool tasks))] \n        (apply merge-with + poker-results))) ","commentTags":[],"questionCommentData":{"allAnswers":[],"correctAnswer":"","question":""}},{"id":"commentId-13","displayCommentEvent":{"timestamp":1512693856432,"type":"INSERT","eventSequenceNumber":7122,"createdByDevGroupId":"devGroupId-2","id":"ev-7122","fileId":"fileId-0","character":"NEWLINE","previousNeighborId":"ev-7121","lineNumber":125,"column":46,"pastedEventId":null},"developerGroupId":"devGroupId-2","timestamp":1604291188805,"commentText":"Each thread will play a lot of 5 card poker hands and return the results in a map.","selectedCodeBlocks":[{"fileId":"fileId-0","selectedText":"(play-a-lot-of-poker num-hands-per-thread five-or-seven)","startRow":122,"startColumn":49,"endRow":122,"endColumn":105}],"imageURLs":[],"videoURLs":[],"audioURLs":[],"linesAbove":"2","linesBelow":"2","currentFilePath":"/pokerThreads.clj","viewableBlogText":"(defn play-poker-in-threads [num-hands-per-thread five-or-seven number-of-threads] \n    (let [pool (Executors/newFixedThreadPool number-of-threads) \n          tasks (repeat number-of-threads (fn [] (play-a-lot-of-poker num-hands-per-thread five-or-seven))) \n          poker-results (map (fn [future] (.get future)) (.invokeAll pool tasks))] \n        (apply merge-with + poker-results))) ","commentTags":[],"questionCommentData":{"allAnswers":[],"correctAnswer":"","question":""}},{"id":"commentId-14","displayCommentEvent":{"timestamp":1512693856432,"type":"INSERT","eventSequenceNumber":7122,"createdByDevGroupId":"devGroupId-2","id":"ev-7122","fileId":"fileId-0","character":"NEWLINE","previousNeighborId":"ev-7121","lineNumber":125,"column":46,"pastedEventId":null},"developerGroupId":"devGroupId-2","timestamp":1604291235035,"commentText":"Next, to play the poker hands I start all of the threads in the thread pool and get them started playing poker.<br><br>The threads will play poker and a map of results will be placed in a 'future' for each thread.","selectedCodeBlocks":[{"fileId":"fileId-0","selectedText":"(.invokeAll pool tasks)","startRow":123,"startColumn":57,"endRow":123,"endColumn":80}],"imageURLs":["media/images/img_3.png"],"videoURLs":[],"audioURLs":[],"linesAbove":"3","linesBelow":"1","currentFilePath":"/pokerThreads.clj","viewableBlogText":"(defn play-poker-in-threads [num-hands-per-thread five-or-seven number-of-threads] \n    (let [pool (Executors/newFixedThreadPool number-of-threads) \n          tasks (repeat number-of-threads (fn [] (play-a-lot-of-poker num-hands-per-thread five-or-seven))) \n          poker-results (map (fn [future] (.get future)) (.invokeAll pool tasks))] \n        (apply merge-with + poker-results))) ","commentTags":[],"questionCommentData":{"allAnswers":[],"correctAnswer":"","question":""}},{"id":"commentId-15","displayCommentEvent":{"timestamp":1512693856432,"type":"INSERT","eventSequenceNumber":7122,"createdByDevGroupId":"devGroupId-2","id":"ev-7122","fileId":"fileId-0","character":"NEWLINE","previousNeighborId":"ev-7121","lineNumber":125,"column":46,"pastedEventId":null},"developerGroupId":"devGroupId-2","timestamp":1604291274400,"commentText":"To collect those values I'll use the <font face=\"Courier\">map</font> function...","selectedCodeBlocks":[{"fileId":"fileId-0","selectedText":"(map ","startRow":123,"startColumn":24,"endRow":123,"endColumn":29}],"imageURLs":[],"videoURLs":[],"audioURLs":[],"linesAbove":"3","linesBelow":"1","currentFilePath":"/pokerThreads.clj","viewableBlogText":"(defn play-poker-in-threads [num-hands-per-thread five-or-seven number-of-threads] \n    (let [pool (Executors/newFixedThreadPool number-of-threads) \n          tasks (repeat number-of-threads (fn [] (play-a-lot-of-poker num-hands-per-thread five-or-seven))) \n          poker-results (map (fn [future] (.get future)) (.invokeAll pool tasks))] \n        (apply merge-with + poker-results))) ","commentTags":[],"questionCommentData":{"allAnswers":[],"correctAnswer":"","question":""}},{"id":"commentId-16","displayCommentEvent":{"timestamp":1512693856432,"type":"INSERT","eventSequenceNumber":7122,"createdByDevGroupId":"devGroupId-2","id":"ev-7122","fileId":"fileId-0","character":"NEWLINE","previousNeighborId":"ev-7121","lineNumber":125,"column":46,"pastedEventId":null},"developerGroupId":"devGroupId-2","timestamp":1604291310646,"commentText":"... to iterate over all of the futures...","selectedCodeBlocks":[{"fileId":"fileId-0","selectedText":"(.invokeAll pool tasks)","startRow":123,"startColumn":57,"endRow":123,"endColumn":80}],"imageURLs":[],"videoURLs":[],"audioURLs":[],"linesAbove":"3","linesBelow":"1","currentFilePath":"/pokerThreads.clj","viewableBlogText":"(defn play-poker-in-threads [num-hands-per-thread five-or-seven number-of-threads] \n    (let [pool (Executors/newFixedThreadPool number-of-threads) \n          tasks (repeat number-of-threads (fn [] (play-a-lot-of-poker num-hands-per-thread five-or-seven))) \n          poker-results (map (fn [future] (.get future)) (.invokeAll pool tasks))] \n        (apply merge-with + poker-results))) ","commentTags":[],"questionCommentData":{"allAnswers":[],"correctAnswer":"","question":""}},{"id":"commentId-17","displayCommentEvent":{"timestamp":1512693856432,"type":"INSERT","eventSequenceNumber":7122,"createdByDevGroupId":"devGroupId-2","id":"ev-7122","fileId":"fileId-0","character":"NEWLINE","previousNeighborId":"ev-7121","lineNumber":125,"column":46,"pastedEventId":null},"developerGroupId":"devGroupId-2","timestamp":1604291370384,"commentText":"... and collect the maps that are returned from the futures with the poker results.<br><br>Each map has the name of the hands and the number of times each happened in the hands.<br><br>The call to <font face=\"Courier\">get</font> on each future may block the main thread until each of the threads is complete and the results are available.","selectedCodeBlocks":[{"fileId":"fileId-0","selectedText":"(fn [future] (.get future))","startRow":123,"startColumn":29,"endRow":123,"endColumn":56}],"imageURLs":["media/images/img_4.png"],"videoURLs":[],"audioURLs":[],"linesAbove":"3","linesBelow":"1","currentFilePath":"/pokerThreads.clj","viewableBlogText":"(defn play-poker-in-threads [num-hands-per-thread five-or-seven number-of-threads] \n    (let [pool (Executors/newFixedThreadPool number-of-threads) \n          tasks (repeat number-of-threads (fn [] (play-a-lot-of-poker num-hands-per-thread five-or-seven))) \n          poker-results (map (fn [future] (.get future)) (.invokeAll pool tasks))] \n        (apply merge-with + poker-results))) ","commentTags":[],"questionCommentData":{"allAnswers":[],"correctAnswer":"","question":""}},{"id":"commentId-18","displayCommentEvent":{"timestamp":1512693856432,"type":"INSERT","eventSequenceNumber":7122,"createdByDevGroupId":"devGroupId-2","id":"ev-7122","fileId":"fileId-0","character":"NEWLINE","previousNeighborId":"ev-7121","lineNumber":125,"column":46,"pastedEventId":null},"developerGroupId":"devGroupId-2","timestamp":1604291417293,"commentText":"<font face=\"Courier\">poker-results</font> is a sequence of maps with the number of poker hands that occurred in each thread.<br><br>The problem is that there will be one map for each thread. I want one map that has all of the results.<br><br>I'll work on that next.","selectedCodeBlocks":[{"fileId":"fileId-0","selectedText":"poker-results ","startRow":123,"startColumn":10,"endRow":123,"endColumn":24}],"imageURLs":[],"videoURLs":[],"audioURLs":[],"linesAbove":"3","linesBelow":"1","currentFilePath":"/pokerThreads.clj","viewableBlogText":"(defn play-poker-in-threads [num-hands-per-thread five-or-seven number-of-threads] \n    (let [pool (Executors/newFixedThreadPool number-of-threads) \n          tasks (repeat number-of-threads (fn [] (play-a-lot-of-poker num-hands-per-thread five-or-seven))) \n          poker-results (map (fn [future] (.get future)) (.invokeAll pool tasks))] \n        (apply merge-with + poker-results))) ","commentTags":[],"questionCommentData":{"allAnswers":[],"correctAnswer":"","question":""}},{"id":"commentId-19","displayCommentEvent":{"timestamp":1512693856432,"type":"INSERT","eventSequenceNumber":7122,"createdByDevGroupId":"devGroupId-2","id":"ev-7122","fileId":"fileId-0","character":"NEWLINE","previousNeighborId":"ev-7121","lineNumber":125,"column":46,"pastedEventId":null},"developerGroupId":"devGroupId-2","timestamp":1604291515665,"commentText":"All of the maps in <font face=\"Courier\">poker-results</font> have a hand name and the number of occurrences that were detected:<br><br><font face=\"Courier\">{\"Royal Flush\" 3<br>&nbsp;\"Straight Flush\" 14<br>&nbsp;...<br>&nbsp;...<br>&nbsp;\"High Card\" 500246}</font><br><br>There is a function called <font face=\"Courier\">merge-with</font> that will merge maps together.<br><br>If two or more maps have the same key a function will be applied to the values with the same key to produce a new value.<br><br>I will use the + function to add all of the values in each of the maps together. This sums up the total number of hands detected in all of the threads.","selectedCodeBlocks":[{"fileId":"fileId-0","selectedText":"merge-with + poker-results","startRow":124,"startColumn":15,"endRow":124,"endColumn":41}],"imageURLs":["media/images/img_5.png","media/images/img_6.png"],"videoURLs":[],"audioURLs":[],"linesAbove":"4","linesBelow":"0","currentFilePath":"/pokerThreads.clj","viewableBlogText":"(defn play-poker-in-threads [num-hands-per-thread five-or-seven number-of-threads] \n    (let [pool (Executors/newFixedThreadPool number-of-threads) \n          tasks (repeat number-of-threads (fn [] (play-a-lot-of-poker num-hands-per-thread five-or-seven))) \n          poker-results (map (fn [future] (.get future)) (.invokeAll pool tasks))] \n        (apply merge-with + poker-results))) ","commentTags":[],"questionCommentData":{"allAnswers":[],"correctAnswer":"","question":""}},{"id":"commentId-20","displayCommentEvent":{"timestamp":1512693856432,"type":"INSERT","eventSequenceNumber":7122,"createdByDevGroupId":"devGroupId-2","id":"ev-7122","fileId":"fileId-0","character":"NEWLINE","previousNeighborId":"ev-7121","lineNumber":125,"column":46,"pastedEventId":null},"developerGroupId":"devGroupId-2","timestamp":1604291579127,"commentText":"There is problem, though. <font face=\"Courier\">merge-with</font> takes a function followed by one or more maps.<br><br><font face=\"Courier\">poker-results</font> is a single sequence of maps.<br><br><font face=\"Courier\">apply</font> unwraps all of the values in a sequence, <font face=\"Courier\">cons</font>'s everything together and evaluates the result.<br><br>This one single map with all of the combined results is then returned from the function.","selectedCodeBlocks":[{"fileId":"fileId-0","selectedText":"(apply merge-with + poker-results)","startRow":124,"startColumn":8,"endRow":124,"endColumn":42}],"imageURLs":[],"videoURLs":[],"audioURLs":[],"linesAbove":"4","linesBelow":"0","currentFilePath":"/pokerThreads.clj","viewableBlogText":"(defn play-poker-in-threads [num-hands-per-thread five-or-seven number-of-threads] \n    (let [pool (Executors/newFixedThreadPool number-of-threads) \n          tasks (repeat number-of-threads (fn [] (play-a-lot-of-poker num-hands-per-thread five-or-seven))) \n          poker-results (map (fn [future] (.get future)) (.invokeAll pool tasks))] \n        (apply merge-with + poker-results))) ","commentTags":[],"questionCommentData":{"allAnswers":[],"correctAnswer":"","question":""}}],"ev-7295":[{"id":"commentId-21","displayCommentEvent":{"timestamp":1512694008520,"type":"INSERT","eventSequenceNumber":7295,"createdByDevGroupId":"devGroupId-2","id":"ev-7295","fileId":"fileId-0","character":"NEWLINE","previousNeighborId":"ev-7294","lineNumber":129,"column":82,"pastedEventId":null},"developerGroupId":"devGroupId-2","timestamp":1604291648741,"commentText":"Here I create the number of threads.<br><br>I'll create 10 threads in this run of the program.","selectedCodeBlocks":[{"fileId":"fileId-0","selectedText":"(def user-supplied-number-of-threads 10) \n","startRow":126,"startColumn":0,"endRow":127,"endColumn":0}],"imageURLs":[],"videoURLs":[],"audioURLs":[],"linesAbove":"0","linesBelow":"2","currentFilePath":"/pokerThreads.clj","viewableBlogText":"(def user-supplied-number-of-threads 10) \n(def hands-per-thread 100000) \n(def total-number-of-hands (* user-supplied-number-of-threads hands-per-thread)) ","commentTags":[],"questionCommentData":{"allAnswers":[],"correctAnswer":"","question":""}},{"id":"commentId-22","displayCommentEvent":{"timestamp":1512694008520,"type":"INSERT","eventSequenceNumber":7295,"createdByDevGroupId":"devGroupId-2","id":"ev-7295","fileId":"fileId-0","character":"NEWLINE","previousNeighborId":"ev-7294","lineNumber":129,"column":82,"pastedEventId":null},"developerGroupId":"devGroupId-2","timestamp":1604291671446,"commentText":"I'll have each thread play 100,000 hands each.","selectedCodeBlocks":[{"fileId":"fileId-0","selectedText":"(def hands-per-thread 100000) \n","startRow":127,"startColumn":0,"endRow":128,"endColumn":0}],"imageURLs":[],"videoURLs":[],"audioURLs":[],"linesAbove":"1","linesBelow":"1","currentFilePath":"/pokerThreads.clj","viewableBlogText":"(def user-supplied-number-of-threads 10) \n(def hands-per-thread 100000) \n(def total-number-of-hands (* user-supplied-number-of-threads hands-per-thread)) ","commentTags":[],"questionCommentData":{"allAnswers":[],"correctAnswer":"","question":""}},{"id":"commentId-23","displayCommentEvent":{"timestamp":1512694008520,"type":"INSERT","eventSequenceNumber":7295,"createdByDevGroupId":"devGroupId-2","id":"ev-7295","fileId":"fileId-0","character":"NEWLINE","previousNeighborId":"ev-7294","lineNumber":129,"column":82,"pastedEventId":null},"developerGroupId":"devGroupId-2","timestamp":1604291698298,"commentText":"This is the total number of poker hands played.<br><br>There will be one million hands played just like before:<br><br>10 * 100,000 = 1,000,000","selectedCodeBlocks":[{"fileId":"fileId-0","selectedText":"(def total-number-of-hands (* user-supplied-number-of-threads hands-per-thread)) \n","startRow":128,"startColumn":0,"endRow":129,"endColumn":0}],"imageURLs":[],"videoURLs":[],"audioURLs":[],"linesAbove":"2","linesBelow":"0","currentFilePath":"/pokerThreads.clj","viewableBlogText":"(def user-supplied-number-of-threads 10) \n(def hands-per-thread 100000) \n(def total-number-of-hands (* user-supplied-number-of-threads hands-per-thread)) ","commentTags":[],"questionCommentData":{"allAnswers":[],"correctAnswer":"","question":""}}],"ev-7426":[{"id":"commentId-24","displayCommentEvent":{"timestamp":1512694155973,"type":"INSERT","eventSequenceNumber":7426,"createdByDevGroupId":"devGroupId-2","id":"ev-7426","fileId":"fileId-0","character":"NEWLINE","previousNeighborId":"ev-7425","lineNumber":131,"column":133,"pastedEventId":null},"developerGroupId":"devGroupId-2","timestamp":1604291875781,"commentText":"This plays all the hands and collects the results.<br><br>I also measure the time it took the function to execute.<br><br>This run of the program took about 5.5 seconds.<br><br>This makes sense since I have two cores on the laptop I am running this code on. This is about twice as fast as the single threaded version.<br><br>Both cores most likely ran five threads each concurrently cutting the program time in half.","selectedCodeBlocks":[{"fileId":"fileId-0","selectedText":"(time (print-frequencies (play-poker-in-threads hands-per-thread 5 user-supplied-number-of-threads) total-number-of-hands))         \n","startRow":130,"startColumn":0,"endRow":131,"endColumn":0}],"imageURLs":["media/images/img_7.png"],"videoURLs":[],"audioURLs":[],"linesAbove":"0","linesBelow":"0","currentFilePath":"/pokerThreads.clj","viewableBlogText":"(time (print-frequencies (play-poker-in-threads hands-per-thread 5 user-supplied-number-of-threads) total-number-of-hands))         ","commentTags":[],"questionCommentData":{"allAnswers":[],"correctAnswer":"","question":""}}],"ev-7431":[{"id":"commentId-25","displayCommentEvent":{"timestamp":1512699558333,"type":"INSERT","eventSequenceNumber":7431,"createdByDevGroupId":"devGroupId-2","id":"ev-7431","fileId":"fileId-0","character":"5","previousNeighborId":"ev-7201","lineNumber":128,"column":23,"pastedEventId":null},"developerGroupId":"devGroupId-2","timestamp":1604291997696,"commentText":"Now I use two threads each playing 500,000 hands.<br><br>This is also 1,000,000 hands.<br><br>This was faster than the single threaded version but a bit slower than when I had 10 threads. <br>","selectedCodeBlocks":[{"fileId":"fileId-0","selectedText":"(def user-supplied-number-of-threads 2) \n(def hands-per-thread 500000) \n(def total-number-of-hands (* user-supplied-number-of-threads hands-per-thread))","startRow":126,"startColumn":0,"endRow":128,"endColumn":80}],"imageURLs":["media/images/1604291989860-Screen Shot 2020-11-01 at 10.39.30 PM.png"],"videoURLs":[],"audioURLs":[],"linesAbove":"0","linesBelow":"0","currentFilePath":"/pokerThreads.clj","viewableBlogText":"(def user-supplied-number-of-threads 2) \n(def hands-per-thread 500000) \n(def total-number-of-hands (* user-supplied-number-of-threads hands-per-thread)) ","commentTags":[],"questionCommentData":{"allAnswers":[],"correctAnswer":"","question":""}}],"ev-7459":[{"id":"commentId-26","displayCommentEvent":{"timestamp":1513016222764,"type":"INSERT","eventSequenceNumber":7459,"createdByDevGroupId":"devGroupId-2","id":"ev-7459","fileId":"fileId-0","character":"l","previousNeighborId":"ev-7458","lineNumber":125,"column":23,"pastedEventId":null},"developerGroupId":"devGroupId-2","timestamp":1604292036707,"commentText":"Finally, I shut down the thread pool before returning the results.","selectedCodeBlocks":[{"fileId":"fileId-0","selectedText":"(.shutdown pool) ","startRow":124,"startColumn":8,"endRow":124,"endColumn":25}],"imageURLs":[],"videoURLs":[],"audioURLs":[],"linesAbove":"4","linesBelow":"1","currentFilePath":"/pokerThreads.clj","viewableBlogText":"(defn play-poker-in-threads [num-hands-per-thread five-or-seven number-of-threads] \n    (let [pool (Executors/newFixedThreadPool number-of-threads) \n          tasks (repeat number-of-threads (fn [] (play-a-lot-of-poker num-hands-per-thread five-or-seven))) \n          poker-results (map (fn [future] (.get future)) (.invokeAll pool tasks))] \n        (.shutdown pool) \n        (apply merge-with + poker-results))) ","commentTags":[],"questionCommentData":{"allAnswers":[],"correctAnswer":"","question":""}}]};
    playbackData.numEvents = 7460;
    playbackData.isEditable = false;
    playbackData.developers = {"devId-0":{"id":"devId-0","userName":"Storyteller System","email":"system@ourcodestories.com","avatarURL":"https://www.gravatar.com/avatar/5fcc05d044610e96c28c9bb4b7278935"},"devId-1":{"id":"devId-1","userName":"Anonymous Developer","email":"anon@ourcodestories.com","avatarURL":"https://www.gravatar.com/avatar/265e214b9c99f4d4f703c6feb9d8652f"},"devId-2":{"id":"devId-2","userName":"Mark Mahoney","email":"mmahoney@carthage.edu","avatarURL":"https://www.gravatar.com/avatar/8f406804248006f79761e9ebc39d414c"}};
    playbackData.developerGroups = {"devGroupId-0":{"id":"devGroupId-0","memberIds":["devId-0"]},"devGroupId-1":{"id":"devGroupId-1","memberIds":["devId-1"]},"devGroupId-2":{"id":"devGroupId-2","memberIds":["devId-2"]}};
    playbackData.playbackTitle = 'Threaded poker';
    playbackData.branchId = 'gwBZb';
}