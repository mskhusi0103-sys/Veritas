const internetDataset = {

topic: "Internet Restrictions in Delhi",


intents: {


verification: {

keywords: [
"true",
"real",
"happened",
"occurred",
"fact",
"confirmed",
"fake",
"actually",
"is it true",
"did it happen",
"internet restricted",
"was internet stopped"
],

answer:
`Yes. Temporary internet restrictions did occur in specific parts of Delhi during the protests. However, it was not a complete internet shutdown across the entire city. The restrictions were limited to affected areas and were officially reported by authorities.

Officially confirmed: Restrictions occurred.
Verdict: Confirmed, but limited to specific areas.`
},



what_happened: {

keywords:[
"what happened",
"what happened in delhi",
"tell me about protests",
"explain event",
"explain situation"
],

answer:
`Large student demonstrations were held in Delhi over concerns related to an examination controversy. Protesters demanded accountability, transparency and corrective action.

Officially confirmed: Demonstrations took place.
Independent media reported the protests.
Verdict: Confirmed protest; evolving details.`
},



reason: {

keywords: [
"why",
"reason",
"cause",
"purpose",
"occur",
"occurred",
"happen",
"happened",
"introduced",
"stopped"
],

answer:
`The internet restrictions were introduced during a sensitive situation. Authorities stated that the purpose was to maintain public safety, control misinformation and manage law-and-order concerns.

The decision also created debate about digital access and freedom of information.

Official explanation: Confirmed.
Alternative explanations: Require further evidence.`
},



background: {

keywords: [
"background",
"what started",
"how it started",
"begin",
"began",
"issue",
"problem"
],

answer:
`The situation developed during student protests connected with concerns about examination irregularities, transparency and accountability. As demonstrations increased, authorities introduced several security measures, including temporary internet restrictions in affected areas.`
},



demands: {

keywords: [
"demand",
"demands",
"want",
"asking",
"asked",
"required",
"protesters want"
],

answer:
`The main demands included greater transparency, accountability, stronger action against irregularities and reforms to improve trust in the examination and recruitment system.

Students wanted a fair investigation and corrective action.`
},



strike: {

keywords:[
"strike",
"hunger strike",
"students go on strike",
"protest strike"
],

answer:
`Reports about strikes or hunger strikes should be verified through official statements and multiple credible reports.

If a strike formed part of the protest, details such as participants, duration and demands should be confirmed separately.

Officially confirmed: Demonstrations and student demands.
Further details require reliable confirmation.`
},



people: {

keywords: [
"who",
"people",
"protesters",
"students",
"involved",
"organised",
"organized",
"leaders"
],

answer:
`The situation involved student protesters, student groups, government authorities, local administration, security personnel and citizens affected by the restrictions.

Different groups had different viewpoints. Protesters focused on examination concerns and accountability, while authorities focused on maintaining public order.

Specific leadership claims should only be accepted when confirmed.`
},



government: {

keywords: [
"government",
"official",
"authority",
"authorities",
"police",
"response",
"action"
],

answer:
`Authorities stated that the restrictions were temporary preventive measures used to maintain public safety and prevent misinformation.

Officials explained that the measures were related to maintaining law and order during a sensitive situation.`
},



impact: {

keywords: [
"impact",
"effect",
"affected",
"problem",
"loss",
"difficulty",
"damage",
"youth",
"students suffered"
],

answer:
`The situation affected young people and students in several ways.

Possible impacts included difficulty accessing information, communication challenges, uncertainty around examinations, disruption to online learning and stress related to academic concerns.

The exact impact varied depending on location and individual circumstances.`
},



education_impact: {

keywords:[
"impact on education",
"students affected",
"how did students get affected",
"youth affected"
],

answer:
`Students were affected mainly through uncertainty around examinations, communication challenges and disruption during demonstrations.

Since examinations influence education and career opportunities, students raised concerns about fairness, transparency and accountability.`
},



location: {

keywords: [
"where",
"area",
"place",
"location",
"which part"
],

answer:
`The restrictions were limited to specific affected areas of Delhi and did not represent a complete internet shutdown across the entire city.`
},



consequences: {

keywords:[
"consequences",
"result",
"outcome",
"after protest",
"what happened after"
],

answer:
`The protests increased discussions about examination transparency, accountability and reforms.

Authorities responded with administrative and security measures, while students continued raising concerns about fairness.

The long-term outcome depends on further investigations and official decisions.`
},



summary: {

keywords: [
"summary",
"explain",
"brief",
"short",
"complete story",
"tell me about"
],

answer:
`Internet restrictions in Delhi became a major issue during protests. Authorities stated that temporary restrictions were necessary for safety and preventing misinformation, while critics raised concerns about communication and transparency.

The verified fact is that restrictions occurred in specific areas, but wider debates about their necessity continue.`
},



simple: {

keywords: [
"simple",
"easy",
"explain like",
"eli5"
],

answer:
`Simply put, some areas of Delhi had temporary internet restrictions during protests.

The government said it was for safety reasons, while others questioned whether restricting internet access was the right solution.`
}


},



fallback:

`I could not find a specific answer for that in my current investigation database.

Try asking about:
• What happened
• Why it happened
• Demands
• People involved
• Government response
• Internet restrictions
• Impact on students
• Consequences`

};