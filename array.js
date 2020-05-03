(function (){
  var names = ["Yatri", "John", "Harry", "Jen", "Jimmy", "jane", "Jason", "Ellen", "joe", "Mike", "Rachel", "Jim", "Nancy"];
  for (var name of names) {
    var firstLetter = name.charAt(0).toLowerCase();
    if (firstLetter === 'j') {
          byeSpeaker.speak(name);
        } else {
          helloSpeaker.speak(name);
        }
      }

    })();
