(()=>{
let messages = [

    {"dateChange": "Sunday, March 30"},

    {"time": "1:39 PM", "message": "Doctor Maura told me I should start journaling when this whole crazy process started. She said it would keep me grounded, let me set milestones of memory, some BS like that."},

    {"time": "1:40 PM", "message": "I told her I'd give it a think and then promised myself I'd forget about it."},

    {"time": "1:40 PM", "message": "But now, you're gone."},

    {"time": "1:40 PM", "message": "You're gone."},

    {"time": "1:40 PM", "message": "Oh god."},

    {"time": "1:40 PM", "message": "You're gone."},

    {"dateChange": "Monday, March 31"},

    {"time": "12:10 AM", "message": "I made it home from the hospital a few hours ago. My hand hurts. My heart hurts. So much paperwork to let someone go."},

    {"time": "12:11 AM", "message": "They say I'll have to sign more tomorrow, and that I should get a lawyer."},

    {"dateChange": "Tuesday, April 1"},

    {"time": "7:12 AM", "message": "I keep expecting you to still be here."},

    {"time": "7:12 AM", "message": "It's not trite, like it sounds like when others say it."},

    {"time": "7:13 AM", "message": "Not like I'm expecting you to come around the corner or come through the door."},

    {"time": "7:13 AM", "message": "More like"},

    {"time": "7:13 AM", "message": "You're still at the hospital."},

    {"time": "7:13 AM", "message": "You're still just at chemo."},

    {"time": "7:13 AM", "message": "You're out of the house."},

    {"time": "7:14 AM", "message": "You lost your phone."},

    {"time": "7:14 AM", "message": "I guess that's trite."},

    {"time": "7:18 AM", "message": "Though I turned off your phone."},

    {"time": "7:18 AM", "message": "I could hear it vibrating every time I messaged."},

    {"time": "7:28 AM", "message": "Couldn't tell if that made me feel sad or stupid, or both."},

    {"time": "7:32 AM", "message": "Both, I think."},

    {"dateChange": "Wednesday, April 2"},

    {"time": "2:30 PM", "message": "You made it to the funeral home."},

    {"time": "2:30 PM", "message": "In one piece."},

    {"time": "2:30 PM", "message": "Hah hah."},

    {"time": "2:48 PM", "message": "Nice gentleman working with me there is irked that I keep texting.", "retime": true},

    {"time": "2:49 PM", "message": "Just showed him this."},

    {"time": "2:50 PM", "message": "He got quiet and smiled and said, \"You can keep texting.\""},

    {"time": "2:50 PM", "message": "Feeling slightly less stupid, but no less sad."},

    {"time": "3:08 PM", "message": "Cremation and all that goes with it is expensive.", "retime": true},

    {"time": "3:08 PM", "message": "I mean, not super expensive. Cheaper than the other stuff."},

    {"time": "3:08 PM", "message": "But we didn't really plan this well."},

    {"time": "3:09 PM", "message": "Oh god."},

    {"time": "3:09 PM", "message": "I almost made a suggestion."},

    {"time": "3:09 PM", "message": "Oh god."},

    {"time": "3:28 PM", "message": "You're gone.", "retime": true},

    {"dateChange": "Thursday, April 3"},

    {"time": "10:02 AM", "message": "You came home in a plastic bag in a box."},

    {"time": "10:02 AM", "message": "Lol"},

    {"time": "10:08 AM", "message": "this is dumb"},

    {"time": "10:08 AM", "message": "cryinf ovef a bvox"},

    {"time": "3:43 PM", "message": "Service Friday 4pm call Maru dad mom mil Jenna Jeff Selene flowers 664-1140", "retime": true},

    {"time": "3:43 PM", "message": "..."},

    {"time": "3:44 PM", "message": "Thought you should know, I guess."},

    {"time": "3:44 PM", "message": "Kick me from beyond the grave if I start using this as a notepad."},

    {"time": "3:44 PM", "message": "I know you would, too."},

    {"dateChange": "Friday, April 4"},

    {"time": "9:51 PM", "message": "Okay."},

    {"time": "9:51 PM", "message": "So."},

    {"time": "9:51 PM", "message": "You know I hate your mom."},

    {"time": "9:52 PM", "message": "I think that's supposed to be some Thing, that a husband must hate his wife's mom."},

    {"time": "9:52 PM", "message": "But you know that, because I'm pretty sure you hated her too."},

    {"time": "9:53 PM", "message": "I mean, you never said so to my face or anything, but you did all you could not to be in the same room as her."},

    {"time": "9:53 PM", "message": "(I know you hate your stepdad)"},

    {"time": "9:53 PM", "message": "*hated"},

    {"time": "9:53 PM", "message": "fuck"},

    {"time": "9:54 PM", "message": "sorry"},

    {"time": "9:54 PM", "message": "..."},

    {"time": "9:56 PM", "message": "sorry"},

    {"dateChange": "Saturday, April 5"},

    {"time": "12:21 AM", "message": "Anyway, that bitch was there at your service."},

    {"time": "12:21 AM", "message": "Of course she was, I mean."},

    {"time": "12:21 AM", "message": "But I call her a bitch because she was."},

    {"time": "12:22 AM", "message": "She made it sound like I killed you."},

    {"time": "12:22 AM", "message": "She said if her daughter had married a Chinese guy, it would've been fine."},

    {"time": "12:23 AM", "message": "But no."},

    {"time": "12:23 AM", "message": "You married me."},

    {"time": "12:23 AM", "message": "And I don't know how, but somehow it became my fault that you died."},

    {"time": "12:24 AM", "message": "We went from crying together over supermarket snack trays to terse arguments in surprisingly little time."},

    {"time": "12:24 AM", "message": "She thought that if she'd married a Chinese man, she would've had kids and a happier life."},

    {"time": "12:25 AM", "message": "I don't know where the cancer came in, but she was convinced that this was somehow the cause of it."},

    {"time": "12:26 AM", "message": "Marry a white guy? Get cancer."},

    {"time": "12:26 AM", "message": "I mean, duh."},

    {"time": "12:26 AM", "message": "She really wanted grandkids."},

    {"time": "12:26 AM", "message": "(didn't tell her about the ligation. You never did, so I promised I wouldn't)"},

    {"time": "12:26 AM", "message": "Anyway."},

    {"time": "12:27 AM", "message": "I'm really upset."},

    {"time": "12:27 AM", "message": "The service wasn't meaningful. It was boring."},

    {"time": "12:27 AM", "message": "Your mother aside, I think that's the most upsetting thing."},

    {"time": "12:27 AM", "message": "Your service was boring."},

    {"time": "12:27 AM", "message": "I got home at nine or whatever, and I just sat on the bed."},

    {"time": "12:28 AM", "message": "I fell asleep in my nice clothes."},

    {"time": "12:28 AM", "message": "Now I'm sitting on the bathroom floor waiting for the water to heat up, and it's already hot, but I'm still on my phone, just like you hate."},

    {"time": "12:28 AM", "message": "*hated"},

    {"dateChange": "Sunday, April 6"},

    {"time": "10:10 AM", "message": "Thank you for leaving a will."},

    {"time": "11:12 AM", "message": "Met with MiL again, this time with lawyers.", "retime": true},

    {"time": "11:12 AM", "message": "Thank you for leaving me everything."},

    {"time": "11:12 AM", "message": "Even your ashes. Your mom hated that most, I think."},

    {"time": "11:13 AM", "message": "You left me with all of our debts, but you left her with nothing."},

    {"time": "11:13 AM", "message": "Surprised I don't feel self-righteous or whatever. Just resolute. I didn't \"win\". If anyone won, it was you."},

    {"time": "11:14 AM", "message": "But if I'd had to cede to your mom and stepdad that would have hurt."},

    {"time": "11:16 AM", "message": "Thank you."},

    {"dateChange": "Monday, April 7"},

    {"time": "2:18 PM", "message": "I formed your ashes into a rock by mixing them with water and baking until they got hard, and then I skipped it across the university pond."},

    {"time": "2:19 PM", "message": "Kidding."},

    {"time": "2:19 PM", "message": "I know you asked for that."},

    {"time": "2:19 PM", "message": "I also didn't dump your ashes out in the parking lot of your office."},

    {"time": "2:20 PM", "message": "I didn't dump them in the plaza fountain or flush them down a toilet at your office, either."},

    {"time": "2:21 PM", "message": "Sorry. All your last wishes gone to waste."},

    {"time": "2:24 PM", "message": "I took your ashes and drove up into the hills, because I decided this wasn't for you, it was for me."},

    {"time": "2:25 PM", "message": "I'm sorry."},

    {"time": "2:27 PM", "message": "I drove up into the hills until I got to one of those pull-aside rest stops, and I walked down to the river there, and I just sat for a bit and cried."},

    {"time": "2:27 PM", "message": "And I wasn't thinking."},

    {"time": "2:28 PM", "message": "And I cut open the bag of ashes and scooped a few handfuls of water in there and mixed it up to a sort of smoothie consistency."},

    {"time": "2:29 PM", "message": "And I poured it out on the river bank."},

    {"time": "2:29 PM", "message": "And I kinda mixed and kneaded and massaged it into the river mud."},

    {"time": "2:29 PM", "message": "And I just kinda cried and gave you up bit by bit."},

    {"time": "2:30 PM", "message": "The water would splash up on the banks and I just let you be carried away bit by bit."},

    {"time": "2:30 PM", "message": "Until there was nothing left but a messy spot on the shore."},

    {"time": "2:30 PM", "message": "And I washed my hands."},

    {"time": "2:30 PM", "message": "And it was super cold."},

    {"time": "2:30 PM", "message": "And I only had my jeans to dry my hands on, so I just sat there like an idiot."},

    {"time": "2:30 PM", "message": "Crying and puffing into my hands to try and warm them up."},

    {"time": "2:31 PM", "message": "You'll be proud to know that it was disgusting."},

    {"time": "2:31 PM", "message": "there's you all over that river bank"},

    {"time": "2:31 PM", "message": "and all over my hands"},

    {"time": "2:31 PM", "message": "and stuck in under my nails"},

    {"time": "2:31 PM", "message": "and probably on my beard"},

    {"time": "2:31 PM", "message": "and the steering wheel of the car"},

    {"time": "2:31 PM", "message": "and the doorknib"},

    {"time": "2:31 PM", "message": "asnd your all over now"},

    {"time": "2:32 PM", "message": "and i thought I was saying goodbye"},

    {"time": "2:32 PM", "message": "and your still here"},

    {"time": "2:32 PM", "message": "i miss you"},

    {"time": "2:32 PM", "message": "i love you"},

    {"dateChange": "Tuesday, April 8"},

    {"time": "12:01 PM", "message": "Okay."},

    {"time": "12:01 PM", "message": "So."},

    {"time": "12:01 PM", "message": "Not only was that a mess, but it was apparently illegal."},

    {"time": "12:03 PM", "message": "I slept and feel better, and now I'm giggling like an idiot over the fact that I did something meaningful to me, and it turned out I was breaking the law the whole time. You're not supposed to scatter ashes in water."},

    {"time": "12:03 PM", "message": "(And even if it were legal, there's probably a better way to do it than what I did.)"},

    {"time": "12:04 PM", "message": "So there you have it. I thought I was going to snub your goofy wishes but your idiot husband wound up going along with them all the same."},

    {"dateChange": "Wednesday, April 9"},

    {"time": "9:41 AM", "message": "Back at work today."},

    {"time": "9:41 AM", "message": "Everyone was nice."},

    {"time": "9:41 AM", "message": "Calm."},

    {"time": "10:21 AM", "message": "And I do feel better, PS. I think I got more out of that than I can put into words.", "retime": true},

    {"dateChange": "Thursday, April 10"},

    {"time": "4:54 PM", "message": "I miss you, sweetheart."},

    {"time": "4:54 PM", "message": "I remember when you got diagnosed and we both had a good cry over it, but then it all turned out to be so boring after that."},

    {"time": "4:55 PM", "message": "It was hard having that hang over us both, I know, but it all got routine"},

    {"time": "4:56 PM", "message": "Awful, but routine"},

    {"time": "4:56 PM", "message": "And then things got better."},

    {"time": "4:56 PM", "message": "Until they didn't."},

    {"time": "4:56 PM", "message": "Everything got so bad so quickly."},

    {"time": "4:56 PM", "message": "Your mom didn't even come and see you."},

    {"time": "4:56 PM", "message": "Oh well."},

    {"time": "4:58 PM", "message": "Starting on the rest of your will and such tonight."},

    {"time": "5:20 PM", "message": "Looks like you just left me anything.", "retime": true},

    {"time": "5:20 PM", "message": "Which is good."},

    {"time": "5:22 PM", "message": "When my sister died, everything was a mess, because she had two wills."},

    {"time": "5:23 PM", "message": "Neither had been updated."},

    {"time": "5:24 PM", "message": "Oh god, and her husband and my parents were a mess trying to figure things out with the house and title and stuff."},

    {"time": "5:24 PM", "message": "Renting is making things easier."},

    {"time": "5:24 PM", "message": "And your \"everything to Markus\" will."},

    {"time": "5:24 PM", "message": "Your mom's pissed."},

    {"dateChange": "Friday, April 11"},

    {"time": "6:43 PM", "message": "Okay, your mom's -really- pissed."},

    {"time": "6:43 PM", "message": "She says that a lot of your stuff is rightfully hers."},

    {"time": "6:44 PM", "message": "I've yet to find anything that could rightfully be called hers."},

    {"time": "6:46 PM", "message": "She wants to go through your desk with me, and I don't know what to say to her. She says she's got books and papers that are hers in there, and I don't know what to do about that."},

    {"time": "6:46 PM", "message": "I wish you were here to tell her off."},

    {"time": "6:48 PM", "message": "She keeps sending me messages in all caps that are half about your stuff and half about how I'm the wrong race, and that you deserved a Chinese man who would take care of her and give her grandkids. She says I'm garbage and disreputable and that I tarnished the reputation of your family."},

    {"time": "6:48 PM", "message": "Which I don't get."},

    {"time": "6:48 PM", "message": "You guys aren't famous"},

    {"time": "6:48 PM", "message": "*Forwarded message from Xiuying (Lee Mom)* GARBAGE YOUR GARBAGE I CANT BELIEVE YOUD KEEP ME FROM MY DAUGHTER"},

    {"time": "6:48 PM", "message": "*Forwarded message from Xiuying (Lee Mom)* You took our name and DRAGGED IT THROUGH MUD YOU TOOK LI AND DRAGGED HER THROUGH MUD GIVE ME WHATS MINE"},

    {"time": "6:49 PM", "message": "Though I guess I did drag you throuugh the mud."},

    {"time": "6:49 PM", "message": "Har Har"},

    {"time": "6:50 PM", "message": "I don't know what she means about keeping you from her."},

    {"time": "6:50 PM", "message": "I thought I knew what hatred felt like, but damn, Lee."},

    {"time": "6:50 PM", "message": "How did so sane a girl come from so crazy a family?"},

    {"time": "6:52 PM", "message": "I was going to go through your clothes first, because those felt like they'd be easy, but I'm going to go through your desk instead."},

    {"dateChange": "Sunday, April 13"},

    {"time": "9:03 AM", "message": "There is literally nothing in your desk of interest."},

    {"time": "9:04 AM", "message": "I took all our bills and boxed up everything and gave it to your mom."},

    {"time": "9:05 AM", "message": "Seriously. You had some notes printed out about research, two planners, and  12 blank books."},

    {"time": "9:05 AM", "message": "I counted."},

    {"time": "9:05 AM", "message": "I swear to god, Lee. I miss the hell out of you, but 12 blank books?"},

    {"time": "9:06 AM", "message": "I just kept your laptop."},

    {"dateChange": "Monday, April 14"},

    {"time": "4:21 PM", "message": "Your mom's yelling at me again."},

    {"time": "4:21 PM", "message": "She wants to go through my papers now, too. And my books?"},

    {"time": "4:22 PM", "message": "I love you and miss you so much. You were always so good at telling her to go away. She won't listen to me at all."},

    {"dateChange": "Tuesday, April 15"},

    {"time": "3:53 PM", "message": "Your stepdad is meeting with me after work."},

    {"time": "3:53 PM", "message": "We're meeting at a coffee shop, don't worry."},

    {"time": "5:23 PM", "message": "WHAT THE FUCK WHAT THE FUCK", "retime": true},

    {"time": "5:24 PM", "message": "Your stepdad was nice enough, we talked about memories of you. He said he knew about your feelings toward him, and that he wished he'd done better by you."},

    {"time": "5:24 PM", "message": "But then I got home and YOUR MOM HAS BEEN IN OUR APARTMENT"},

    {"time": "5:25 PM", "message": "I guess I got home faster than they thought, but I think your stepdad was keeping me occupied while your mom BROKE INTO OUR PLACE"},

    {"time": "5:26 PM", "message": "I ran into her in front of the building and she started yelling and hollering at me, and I was so confused."},

    {"time": "5:26 PM", "message": "She said I was hiding your stuff from her and that she would be calling her lawyer."},

    {"time": "5:28 PM", "message": "AND THEN SHE HIT ME"},

    {"time": "5:28 PM", "message": "SHE SLAPPED ME"},

    {"time": "5:29 PM", "message": "I yelled that I was going to call the police when Jun screeched up in a car and she jumped in and drove off"},

    {"time": "5:29 PM", "message": "What the FUCK"},

    {"time": "5:30 PM", "message": "I'm calling the cops to get her away from here"},

    {"time": "5:58 PM", "message": "They took a report and said to call again if she shows up, that way they can talk with her, and worst case, then I can get a restraining order.", "retime": true},

    {"time": "5:59 PM", "message": "She trashed our bookshelf and dug through our closets."},

    {"time": "6:00 PM", "message": "I don't think anything's missing. It's just a mess."},

    {"time": "6:00 PM", "message": "The cop took a report, though."},

    {"time": "6:00 PM", "message": "Don't know how she got a key."},

    {"dateChange": "Wednesday, April 16"},

    {"time": "11:03 AM", "message": "Now she wants your laptop."},

    {"time": "11:03 AM", "message": "I had it with me at coffee even."},

    {"time": "11:04 AM", "message": "I don't have the password, though, no idea what she'd do with it."},

    {"time": "11:32 AM", "message": "I think I may destroy it."},

    {"dateChange": "Friday, April 18"},

    {"time": "11:03 PM", "message": "I miss you so much, Lee."},

    {"time": "11:04 PM", "message": "I think it's really starting to hit me."},

    {"time": "11:04 PM", "message": "You're gone."},

    {"time": "11:04 PM", "message": "You're dead."},

    {"time": "11:04 PM", "message": "You're never coming back."},

    {"time": "11:05 PM", "message": "Your mom went quiet, and now I'm finally starting to digest this."},

    {"time": "11:08 PM", "message": "I wish I could take your place."},

    {"time": "11:08 PM", "message": "I wish I were dead."},

    {"time": "11:08 PM", "message": "I wish I was gone."},

    {"time": "11:11 PM", "message": "Oh god."},

    {"time": "11:11 PM", "message": "I keep getting stcuk crying and"},

    {"time": "11:11 PM", "message": "its so hrad to keep going sometimes"},

    {"time": "11:11 PM", "message": "i want to die without yowue"},

    {"time": "11:12 PM", "message": "oh god"},

    {"time": "11:12 PM", "message": "lee"},

    {"time": "11:12 PM", "message": "oh god"},

    {"dateChange": "Saturday, April 19"},

    {"time": "12:44 AM", "message": "I miss you"},

    {"dateChange": "Sunday, April 20"},

    {"time": "2:21 PM", "message": "I can't believe you set your password to that!"},

    {"time": "2:21 PM", "message": "I could spank you for that, miss prissy kisses."},

    {"time": "2:21 PM", "message": "You're such a dork <3"},

    {"dateChange": "Monday, April 21"},

    {"time": "1:02 AM", "message": "Lee"},

    {"time": "1:02 AM", "message": "Lee I'm so sorry"},

    {"time": "1:02 AM", "message": "I'm so sorry"},

    {"time": "1:02 AM", "message": "I'm reading it now"},

    {"time": "9:20 AM", "message": "stayed home", "retime": true},

    {"time": "9:21 AM", "message": "cant stop crying"},

    {"time": "9:21 AM", "message": "sorry"},

    {"time": "9:21 AM", "message": "im so sorry lee"},

    {"time": "4:11 PM", "message": "I could kill him", "retime": true},

    {"time": "4:11 PM", "message": "I WOULD fucking kill him right now"},

    {"time": "4:28 PM", "message": "I would destroy him and your mom for all they've done if I could"},

    {"dateChange": "Tuesday, April 22"},

    {"time": "12:31 AM", "message": "I won't"},

    {"time": "12:31 AM", "message": "But I could."},

    {"time": "12:31 AM", "message": "I'm sorry Lee"},

    {"time": "12:41 AM", "message": "I wish I could go back in time and help you."},

    {"dateChange": "Wednesday, April 23"},

    {"time": "6:43 PM", "file": "should-I-pass.txt"},

    {"time": "6:43 PM", "message": "Sorry, wanted that on my end, so I sent it from your account."},

    {"time": "6:48 PM", "message": "Apparently your account expires after six months inactivity."},

    {"time": "6:48 PM", "message": "I wonder if I should keep logging on once a month to keep it active?"},

    {"time": "6:49 PM", "message": "Or"},

    {"time": "6:49 PM", "message": "Maybe I should let it expire"},

    {"time": "6:49 PM", "message": "And set that as a date to let you go"},

    {"time": "6:49 PM", "message": "Oh god Lee"},

    {"time": "6:52 PM", "message": "oh god"},

    {"time": "6:52 PM", "message": "i miss you"},

    {"time": "6:52 PM", "message": "you made me whole"},

    {"time": "6:57 PM", "message": "don't want to tgo on weifthout oyu"},

    {"time": "6:57 PM", "message": "sdf"},

    {"time": "7:20 PM", "message": "sorry", "retime": true},

    {"dateChange": "Friday, April 25"},

    {"time": "5:10 PM", "message": "I'm calling your mom and Jun today."},

    {"time": "5:11 PM", "message": "I'm going to invite them over this weekend and confront them."},

    {"time": "5:12 PM", "message": "You're right in that it's just a document. No signature, no verification."},

    {"time": "5:12 PM", "message": "Biot I need to do right by yuo/ i miss yuo, and i want to do right by you"},

    {"time": "5:12 PM", "message": "you tolfd me not to fight"},

    {"time": "5:12 PM", "message": "and i wont"},

    {"time": "5:12 PM", "message": "im just goin to tell thm i know"},

    {"time": "5:12 PM", "message": "tey need to know that someone else knowds"},

    {"dateChange": "Saturday, April 26"},

    {"time": "11:01 AM", "message": "Your mom and Jun are coming over tomorrow."},

    {"time": "11:01 AM", "message": "I think I'm going to just tell them plain and simple, what I found."},

    {"time": "11:02 AM", "message": "I hate them. I loathe them."},

    {"time": "11:03 AM", "message": "But I owe it to you to not make it a big fight."},

    {"time": "11:03 AM", "message": "Not on my part, at least."},

    {"time": "11:03 AM", "message": "If they get angry, whatever. I'm just going to read it."},

    {"time": "11:03 AM", "message": "Most of it."},

    {"time": "11:03 AM", "message": "Read it and watch and make sure they understand that I know."},

    {"time": "11:08 AM", "message": "I'm starting to second guess this."},

    {"time": "11:18 AM", "message": "Like, obviously I'm upset, and obviously you wanted me to know that your parents are awful.", "retime": true},

    {"time": "11:18 AM", "message": "But I'm starting to second guess what I'll get out of this."},

    {"time": "11:19 AM", "message": "Even when I said I wouldn't make it a big fight, I was still coming at it from a vengeance standpoint."},

    {"time": "11:19 AM", "message": "I wanted to hurt them."},

    {"time": "11:20 AM", "message": "Still do."},

    {"time": "11:20 AM", "message": "I just don't think that's totally right."},

    {"time": "2:18 PM", "message": "I thought about it more, and I think I still need to share what you wrote.", "retime": true},

    {"time": "2:19 PM", "message": "It'll hurt them, and it'll probably hurt me more than it already has."},

    {"time": "2:19 PM", "message": "But I don't think any of us will be able to start grieving with the current state."},

    {"time": "2:19 PM", "message": "...I'm going to call Dr Maura."},

    {"time": "2:48 PM", "message": "I wasn't expecting her to get back to me, but she actually picked up her phone on the first ring.", "retime": true},

    {"time": "2:48 PM", "message": "I don't know why that strikes me as weird."},

    {"time": "2:49 PM", "message": "We talked for a bit about what I should do."},

    {"time": "2:40 PM", "message": "I told her about the letter you left. She agrees I should share with your parents, if only to give closure, like I said before."},

    {"time": "2:50 PM", "message": "She says she's worried about me and wants to talk more soon."},

    {"time": "2:58 PM", "message": "I told her about this, too.", "retime": true},

    {"time": "2:58 PM", "message": "About sending you messages, even though you'll never respond. Just talking to you."},

    {"time": "3:00 PM", "message": "She says it can be a healthy coping mechanism, but only to a point, and that I shouldn't lean on it too much, or I won't stop grieving."},

    {"time": "3:00 PM", "message": "Makes sense."},

    {"time": "3:01 PM", "message": "I promised I'd let your account expire, and would do my best to start moving on sooner than that."},

    {"time": "3:02 PM", "message": "We also talked about getting through grief in stages. She says there are a few different lists of 'stages of grief', but that they're all just loose guidelines."},

    {"time": "3:03 PM", "message": "She says it sounds like I'm going through some healthy stuff, but that she wants to meet again to make sure I keep going."},

    {"time": "3:05 PM", "message": "She says that things could wear me out and make me depressed, or that things could be super easy and I could finish all the work I need to do, and realize you're truly gone and get depressed."},

    {"time": "3:05 PM", "message": "I countered that I was depressed now, but I'm not sure about that anymore. I think I'm sad, and that depression will come soon."},

    {"time": "3:06 PM", "message": "I'm sad, Lee."},

    {"time": "3:06 PM", "message": "I'm sad and I'm tired and I want you back."},

    {"time": "3:06 PM", "message": "I'm sitting on the floor waiting for the shower again. My tail's fallen asleep. I'm gonna go before you get mad, even if that isn't possible."},

    {"time": "3:07 PM", "message": "I don't care if that's me grieving in an unhealthy manner or anything, I'm going to go before you get mad."},

    {"time": "3:07 PM", "message": "I'll try to only write again after things with your parents."},

    {"dateChange": "Sunday, April 27"},

    {"time": "4:05 PM", "message": "This is weird"},

    {"time": "4:21 PM", "message": "Taking a break, this is still weird.", "retime": true},

    {"time": "5:33 PM", "message": "WHAT THE FUCK, LEE", "retime": true},

    {"time": "5:33 PM", "message": "THE POLICE JUST ARRESTED YOUR MOM"},

    {"time": "5:33 PM", "message": "What the FUCK"},

    {"time": "5:43 PM", "message": "Gave the police my report.", "retime": true},

    {"time": "5:43 PM", "message": "What the fuck."},

    {"time": "5:46 PM", "message": "Okay, writing this all down before I forget."},

    {"time": "5:47 PM", "message": "We met at that same coffee shop I met Jun at before. The Book and the Bean. It's got a bookstore in the back, I think we've been there before."},

    {"time": "5:47 PM", "message": "Only this time, Jun looked sincerely upset and sorry."},

    {"time": "5:47 PM", "message": "Like"},

    {"time": "5:48 PM", "message": "I don't know how to put it. He looked upset for me, not at me?"},

    {"time": "5:48 PM", "message": "And your mom looked extra pissed."},

    {"time": "5:48 PM", "message": "And I don't know what happened, like maybe they got into a fight before getting here?"},

    {"time": "5:49 PM", "message": "So we were really quiet and Jun was looking down at his hands a lot and your mom was glaring at me a lot and I was tired."},

    {"time": "5:49 PM", "message": "I hate coffee, but I got a mocha or whatever, because Lee, I've just been so tired."},

    {"time": "5:50 PM", "message": "this isn't helping, i'm sorry."},

    {"time": "5:50 PM", "message": "i miss yuo"},

    {"time": "7:32 PM", "message": "Sorry, I'll try again and get more to the point.", "retime": true},

    {"time": "7:33 PM", "message": "So the more I thought about what I had planned, the less I really wanted to go through with it. So I tried to just sit there and talk with your parents about you and all the good time and stuff."},

    {"time": "7:33 PM", "message": "I tried earnestly to patch things up, but your mom just told me she remembered things differently."},

    {"time": "7:34 PM", "message": "And it was stupid, because I could tell Jun was sad."},

    {"time": "7:34 PM", "message": "After everything."},

    {"time": "7:34 PM", "message": "After everything in your letter and after the dumbass break-in attempt and everything."},

    {"time": "7:34 PM", "message": "He was sad."},

    {"time": "7:35 PM", "message": "He would smile a little at a memory I brought up, then look off away from your mom like he wasn't going to cry."},

    {"time": "7:35 PM", "message": "And then your mom would get huffy, and he'd nod at her, and go back to looking at his hands."},

    {"time": "7:35 PM", "message": "I don't know."},

    {"time": "7:36 PM", "message": "I feel like he's as exhausted as I am, but for different reasons."},

    {"time": "7:36 PM", "message": "So we took a little break because I felt like he and I were headed for a different conversation than your mom."},

    {"time": "7:36 PM", "message": "So we got some more coffees and such."},

    {"time": "7:36 PM", "message": "And I just kinda buckled down and did it."},

    {"time": "7:36 PM", "message": "Before, when I was feeling more vengeful, I thought maybe I'd print off some copies and hand it to them all formally and wither them under my glare or whatever."},

    {"time": "7:37 PM", "message": "But I just sat down and told them about the file and how I found it."},

    {"time": "7:37 PM", "message": "How you'd written it to me, and locked your computer with a password for me."},

    {"time": "7:37 PM", "message": "oh god haha"},

    {"time": "7:37 PM", "message": "fuck"},

    {"time": "8:01 PM", "message": "I'm supposed to keep it together to finish this.", "retime": true},

    {"time": "8:02 PM", "message": "How you always called me 'crazy face' but only over text because it sounded silly to say."},

    {"time": "8:02 PM", "message": "And how you set that as your password, and addressed the letter to me."},

    {"time": "8:03 PM", "message": "(I didn't tell them I called you 'prissy kisses' in return.)"},

    {"time": "8:03 PM", "message": "And I told them what the letter was about."},

    {"time": "8:04 PM", "message": "And as I started to talk about all that your dad had done and all that your mom and Jun did to cover it up I started to loosen things up"},

    {"time": "8:04 PM", "message": "And I started to feel lighter."},

    {"time": "8:04 PM", "message": "And I started to wake up."},

    {"time": "8:04 PM", "message": "And your mom started looking strange and scared."},

    {"time": "8:04 PM", "message": "And Jun was actively crying now"},

    {"time": "8:05 PM", "message": "and don't know"},

    {"dateChange": "Monday, April 28"},

    {"time": "12:03 AM", "message": "Sorry"},

    {"time": "12:03 AM", "message": "And then I started talking about your mom and her attempts to cope and how she blamed you, and she lost her mind."},

    {"time": "12:04 AM", "message": "It was like something snapped."},

    {"time": "12:04 AM", "message": "That sounds cliche, but it's true. Like, she was gripping the table tight and all set to pounce, and whatever tension was in her muscles snapped violently and she threw the table."},

    {"time": "12:05 AM", "message": "It sounds so fucking ridiculous to say it now, hah"},

    {"time": "12:05 AM", "message": "It was scary as hell then, though. She threw the whole table to the side and then threw her coffee cup (empty) at my face and then hit Jun with her purse."},

    {"time": "12:06 AM", "message": "And I thought she was done because everyone was shocked and staring at us."},

    {"time": "12:06 AM", "message": "But then she started shrieking and ran to the book shelf we were sitting by and started throwing books at us."},

    {"time": "12:06 AM", "message": "(paperbacks don't hurt that much, but hardcovers do)"},

    {"time": "12:06 AM", "message": "And Jun seemed to snap out of it too and jumped up to grab her."},

    {"time": "12:07 AM", "message": "He grabbed her around the middle and sort of lifted her up and turned around so that he was between us."},

    {"time": "12:07 AM", "message": "This is dumb, but it was sorta like when I'd pick you up when you were being a fuss and carry you off to bed, laughing."},

    {"time": "12:07 AM", "message": "So I guess that runs in the family in a creepy sort of way."},

    {"time": "12:07 AM", "message": "Anyway."},

    {"time": "12:07 AM", "message": "Jun got her turned around and hauled her outside, hollering at us to call the ambulance on the way out."},

    {"time": "12:08 AM", "message": "And the badger at the bar already had the police on the phone, so she added something about an ambulance."},

    {"time": "12:08 AM", "message": "And then the police were there and the fire truck because they're the first responders."},

    {"time": "12:08 AM", "message": "And they fucking handcuffed your mom and put her in the back of the cruiser."},

    {"time": "12:08 AM", "message": "And no one was hurt, so the fire truck left"},

    {"time": "12:08 AM", "message": "And the police came in and started taking reports as Jun and I and the badger started picking up the books and putting them back."},

    {"time": "12:09 AM", "message": "And all the while your mom was alternating between sobbing and throwing a hissing fit in the back of the cop car."},

    {"time": "12:09 AM", "message": "And then I gave my report, and then Jun did"},

    {"time": "12:10 AM", "message": "And I just kinda waved at him and left while he was giving his report."},

    {"time": "12:10 AM", "message": "Because how awkward of a goodbye would that have been?"},

    {"time": "1:21 PM", "message": "I met with Dr. Maura today, and we talked about the weekend a lot.", "retime": true},

    {"time": "1:21 PM", "message": "She says that she thinks I did the right thing, and that this is a turning point in our relationship"},

    {"time": "1:22 PM", "message": "our=me and your parents"},

    {"time": "1:22 PM", "message": "And she said that it's time to work on letting you go."},

    {"time": "1:23 PM", "message": "She said that it's not because my relationship with you has changed, or if it has, it's gotten stronger. She says that it's important that I use the energy I've had when it came to your parents and your estate and put it to work on myself."},

    {"time": "1:23 PM", "message": "And I told her how tired I was and she smiled and said that I felt better after giving the letter to your parents because that was the first bit of letting you go."},

    {"time": "1:24 PM", "message": "And I think she's right."},

    {"time": "1:24 PM", "message": "I think I'd been holding you close to keep you safe from what I perceived as danger."},

    {"time": "1:24 PM", "message": "Rightfully so!"},

    {"time": "1:24 PM", "message": "But your mom was right in that I was keeping you from her, to some extent, and largely at your request."},

    {"time": "1:24 PM", "message": "So I think I need to start working on that."},

    {"time": "1:24 PM", "message": "I'll never forget you"},

    {"time": "1:25 PM", "message": "And I'll never stop loving you"},

    {"time": "1:25 PM", "message": "and i'll never stop missing you"},

    {"time": "1:25 PM", "message": "but she's right"},

    {"time": "1:35 PM", "message": "I need to start working on myself, too.", "retime": true},

    {"dateChange": "Wednesday, May 1"},

    {"time": "9:38 PM", "message": "I gave it a break for a day and spent yesterday cleaning the apartment."},

    {"time": "9:40 PM", "message": "Well, after work. I'm back there full time, and that's starting to feel normal again."},

    {"time": "9:40 PM", "message": "But after, I tore down your desk and turned it into a bookshelf, best I could."},

    {"time": "9:40 PM", "message": "Not sure how long that will last. I want to set up my gaming rig there, just to piss you off <3"},

    {"time": "9:44 PM", "message": "Anyway, I'm going to keep doing this less and less."},

    {"time": "9:44 PM", "message": "This texting you."},

    {"time": "9:44 PM", "message": "I already threw away your phone and wiped your laptop."},

    {"time": "9:45 PM", "message": "So I don't have access to your account anymore, and it'll expire."},

    {"time": "9:45 PM", "message": "(and yes, I did try 'crazy face', but you hadn't changed it, which is good, miss prissy kisses.)"},

    {"time": "9:45 PM", "message": "So..."},

    {"time": "9:45 PM", "message": "I'll contact you in a week and see where things go from there."},

    {"dateChange": "Tuesday, May 7"},

    {"time": "6:11 PM", "message": "I"},

    {"time": "6:11 PM", "message": "shit, tomorrow"},

    {"dateChange": "Wednesday, May 8"},

    {"time": "7:58 PM", "message": "I was going to text you yesterday because I got a call from Jun."},

    {"time": "7:59 PM", "message": "Your mom was released that same weekend, of course, but she got charged and had to go do a trial or something and has community service and therapy."},

    {"time": "7:59 PM", "message": "And Jun sounded like he'd perked up some, too."},

    {"time": "8:00 PM", "message": "So we talked about you and sort of had the conversation that we were going to have without your mom."},

    {"time": "8:00 PM", "message": "You know, memories and good stuff and rebuilding bridges."},

    {"time": "8:01 PM", "message": "And he said that he'll probably be getting a divorce from your mom after the letter (I emailed it) and coming to realize just how much your mom was after him as well as you, keeping you in her service and using anxiety as a tool."},

    {"time": "8:01 PM", "message": "So that was good."},

    {"time": "8:02 PM", "message": "Or maybe not good, I imagine divorces suck."},

    {"time": "8:18 PM", "message": "Anyway, it's been a week of caring for myself."},

    {"time": "8:18 PM", "message": "I did move the gaming rig."},

    {"time": "8:18 PM", "message": "Sorry not sorry."},

    {"time": "8:19 PM", "message": "And I started putting the stuff that was yours but worth keeping into a few boxes, which are now in my closet, and the rest of your stuff is gone."},

    {"time": "8:20 PM", "message": "Well, there's probably more, but it's gone."},

    {"time": "8:20 PM", "message": "And hell, I miss you, Lee."},

    {"time": "8:22 PM", "message": "Until next week <3"},

    {"dateChange": "Wednesday, May 15"},

    {"time": "5:07 PM", "message": "I met with Dr Maura again today."},

    {"time": "5:07 PM", "message": "It was REALLY good."},

    {"time": "5:07 PM", "message": "We were talking a lot about the stages of crisis and such."},

    {"time": "5:07 PM", "message": "Which we've done before, of course."},

    {"time": "5:08 PM", "message": "And my role in it all."},

    {"time": "5:08 PM", "message": "How it's sometimes my choice to move between stages."},

    {"time": "5:08 PM", "message": "Like, I can park myself in depression for a while."},

    {"time": "5:09 PM", "message": "Or anger, or bargaining, or whatever."},

    {"time": "5:09 PM", "message": "I could just stay there because it's easier to stay than moving on."},

    {"time": "5:09 PM", "message": "Not that those stages aren't necessary!"},

    {"time": "5:10 PM", "message": "Just that it takes effort to leave them when you're ready."},

    {"time": "5:10 PM", "message": "And I'm trying."},

    {"time": "8:22 PM", "message": "We were pretty spot on in terms of music tastes, you know that?", "retime": true},

    {"time": "8:22 PM", "message": "Going through your library."},

    {"time": "8:22 PM", "message": "Sorry not sorry <3"},

    {"time": "8:28 PM", "message": "We could've made a rockin' band, you know?"},

    {"time": "8:28 PM", "message": "Miss Prissy Kisses and the Crazy Faces."},

    {"time": "8:28 PM", "message": "Though that sounds like an old punk band."},

    {"time": "8:28 PM", "message": "And we seem to have done mostly prog."},

    {"time": "8:28 PM", "message": "..."},

    {"time": "8:29 PM", "message": "And neither of us played any instruments"},

    {"time": "8:29 PM", "message": "So maybe not a good band."},

    {"dateChange": "Thursday, May 16"},

    {"time": "12:38 AM", "message": "i miss you"},

    {"time": "12:38 AM", "message": "i love you"},

    {"time": "8:22 AM", "message": "Sad night last night.", "retime": true},

    {"time": "8:23 AM", "message": "Taking Maura's words to heart."},

    {"time": "8:23 AM", "message": "Going to choose to go to work."},

    {"time": "8:23 AM", "message": "Choose to get better."},

    {"time": "8:23 AM", "message": "Holding off until tomorrow, if I can."},

    {"time": "11:01 PM", "message": "This needs to stop.", "retime": true},

    {"time": "11:12 AM", "message": "I think it's time."},

    {"dateChange": "Friday, May 24"},

    {"time": "6:58 PM", "message": "I miss you, Lee."},

    {"time": "6:58 PM", "message": "I always will, and I'll always love you."},

    {"time": "6:58 PM", "message": "But you're gone."},

    {"time": "6:59 PM", "message": "You're gone now, and I'm working to find a way to live with that."},

    {"time": "6:59 PM", "message": "I've been slowly washing the apartment of your presence."},

    {"time": "7:03", "message": "Not that you'll be gone entirely, of course. I have your picture in a few places."},

    {"time": "7:03", "message": "But I got rid of all the stuff that was -yours-."},

    {"time": "7:03", "message": "and washed the bedding several times."},

    {"time": "7:04 PM", "message": "To get rid of the smell of you."},

    {"time": "7:06 PM", "message": "Christ, this is hard."},

    {"time": "7:07 PM", "message": "Good, in the long run, I hope, but hard."},

    {"time": "7:18 PM", "message": "I'm not done grieving or mourning.", "retime": true},

    {"time": "7:18 PM", "message": "Not by a long shot."},

    {"time": "7:18 PM", "message": "But I'm working on it. I'm working on finding a way to accept that you're gone."},

    {"time": "7:21 PM", "message": "Not to forget you, but, tacky as it sounds, honor you."},

    {"time": "7:21 PM", "message": "I'm working on getting to that stage."},

    {"time": "7:21 PM", "message": "So."},

    {"time": "7:21 PM", "message": "I'm going to start journaling."},

    {"time": "7:21 PM", "message": "And delete your contact."},

    {"time": "7:21 PM", "message": "Though I saved our messages."},

    {"time": "7:21 PM", "message": "And write for myself, and not for you."},

    {"time": "7:21 PM", "message": "With Dr. Maura's blessing."},

    {"time": "7:22 PM", "message": "And, hopefully, yours."},

    {"time": "7:22 PM", "message": "I love you."},

    {"time": "7:22 PM", "message": "I miss you."},

    {"time": "7:22 PM", "message": "I always will."},

    {"time": "7:22 PM", "message": "But you're gone."},

    {"time": "7:22 PM", "message": "And you're not at the store."},

    {"time": "7:23 PM", "message": "Or at chemo, or still sick at the hospital."},

    {"time": "7:23 PM", "message": "You're gone."},

    {"time": "7:23 PM", "message": "And it's time for me to work on that."},

    {"time": "7:24 PM", "message": "So goodbye, Lee."},

    {"time": "7:24 PM", "message": "Sleep well, miss prissy kisses."},

    {"time": "7:24 PM", "message": "Crazy face, out."}

]
// Elements we'll be referring to.
const log = document.getElementById('log');
const entry = document.getElementById('entryText');
const send = document.getElementById('send');
const credits = document.getElementById('credits');
const anchors = document.getElementsByTagName('a');
entry.innerHTML = messages[1].message;
entry.scrollTo(0, entry.scrollHeight);

// Event forr clicking Send
document.getElementById('send').onclick = () => {
  // Bail if we don't have messages (before we start, after we end)
  if (!messages) {
    return;
  }

  // Make the credits visible and bail, removing the event, once we're done.
  if (messages.length === 0) {
    credits.classList.add('visible');
    document.getElementById('dismiss').onclick = (aEvt) => {
      aEvt.stopPropagation();
      credits.classList.remove('visible');
    };
    for (let i = 0; i < anchors.length; i++) {
      anchors[i].onclick = (aEvt) => {
        aEvt.stopPropagation();
      }
    };
    send.onclick = null;
    return;
  }

  // Get the most recent message.
  let message = messages.shift();

  // If it's a date, add the date node, then get the followinug message.
  if (message.dateChange) {
    // Create a date div.
    const dateNode = document.createElement('div');
    dateNode.classList.add('date');
    const dateText = document.createTextNode(message.dateChange);
    dateNode.appendChild(dateText);
    log.appendChild(dateNode);
    message = messages.shift();
  }

  // If it's a retime, add the retime node.
  if (message.retime) {
    // Create a retime div.
    const retimeNode = document.createElement('div');
    retimeNode.classList.add('retime');
    const retimeInner = document.createElement('span');
    const retimeText = document.createTextNode(message.time);
    retimeInner.appendChild(retimeText);
    retimeNode.appendChild(retimeInner);
    log.appendChild(retimeNode);
  }

  if (message.file) {
    // Create the div for the message text.
    const msgTextNode = document.createElement('div');
    msgTextNode.classList.add('msgText')
    const msgText = document.createTextNode(`Lee ♥ sent you: ${message.file}`);
    msgTextNode.appendChild(msgText);

    // Create the div for the message time.
    const timeNode = document.createElement('div');
    timeNode.classList.add('msgTime')
    const timeText = document.createTextNode(message.time);
    timeNode.appendChild(timeText)

    // Create the div for the full message and append to the log.
    const msgNode = document.createElement('div');
    msgNode.classList.add('msg')
    msgNode.classList.add('file')
    msgNode.appendChild(msgTextNode);
    msgNode.appendChild(timeNode);
    log.appendChild(msgNode);
    return;
  }

  // Create the div for the message text.
  const msgTextNode = document.createElement('div');
  msgTextNode.classList.add('msgText')
  const msgText = document.createTextNode(message.message);
  msgTextNode.appendChild(msgText);

  // Create the div for the message time.
  const timeNode = document.createElement('div');
  timeNode.classList.add('msgTime')
  const timeText = document.createTextNode(message.time);
  timeNode.appendChild(timeText)

  // Create the div for the full message and append to the log.
  const msgNode = document.createElement('div');
  msgNode.classList.add('msg')
  msgNode.appendChild(msgTextNode);
  msgNode.appendChild(timeNode);
  log.appendChild(msgNode);

  // If we stil have messages, attempt to get the next one to display in the
  // entry box.
  if (messages.length > 1) {
    let next = messages[0];
    if (next.dateChange) {
      next = messages[1];
    }
    if (next.file) {
      next = messages[2];
    }
    entry.innerHTML = next.message;
    entry.scrollTo(0, entry.scrollHeight);
  } else {
    entry.innerHTML = '';
  }

  // Scroll the log to the bottom.
  log.scrollTo(0, log.scrollHeight);
};
})();
