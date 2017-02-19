//Array of documents
const allFiles = [
{ file: 'advent story',
 extention: 'pdf'},

{ file: 'community',
 extention: 'docx'},

{ file: 'wedding photos',
 extention: 'jpg'},

{ file: 'An Enemy Called Average',
 extention: 'pdf'},

{ file: 'Act of Seduction',
 extention: 'pdf'},

{ file: 'independent',
 extention: 'png'},

{ file: 'Abuja life',
 extention: 'jpg'},

{ file: 'immaculate conception',
 extention: 'docx'},

{ file: 'Outliers',
 extention: 'pdf'},

{ file: 'Obama',
 extention: 'jpg'},

{ file: 'clinton',
 extention: 'png'},

{ file: 'clinton',
 extention: 'png'},

{ file: 'Buhari',
 extention: 'pdf'},

{ file: 'Jonathan',
 extention: 'pdf'},

{ file: 'Think and grow rich',
 extention: 'docx'},

{ file: 'wedding party',
 extention: 'jpg'},

{ file: 'constitution',
 extention: 'docx'},

{ file: 'religion',
 extention: 'docx'},

{ file: 'herdsmen',
 extention: 'pdf'},

{ file: 'Beck',
 extention: 'docx'},

{ file: 'Becker',
 extention: 'pdf'},

{ file: 'Beckett',
 extention: 'png'},

{ file: 'Beddoes',
 extention: 'docx'},

{ file: 'Beecher',
 extention: 'docx'},

{ file: 'Exammination',
 extention: 'pdf'},

{ file: 'Destiny',
 extention: 'docx'}
];


// const docx = allFiles.filter(function(allFile){
// 	if (allFile.extention == 'docx') {
// 		return true;
// 	}
// });
// const png = allFiles.filter(function(allFile){
// 	if (allFile.extention == 'png') {
// 		return true;
// 	}
// });


//Find matching files
function findFile(wordToMatch, allFiles) {
	return allFiles.filter(function(allFile) {
		const regex = new RegExp(wordToMatch, 'gi');
			return allFile.file.match(regex)
});
} 

// search if input field is empty
 function findExt() {
 	console.log(searchWord.value);
 	if (searchWord.value == ""){
 		return alert("Please, enter document title.");
 	} else {
 		findMatches();
 	}
 }

//Print Matching files in HTML
 function findMatches() {
 	// Check if the file type is selected
 	if (ext.value == "PDF" || ext.value == "Docx" || ext.value == "PNG" 
 		|| ext.value == "JPEG") {
 		const regex2 = new RegExp(ext.value, 'gi');
 		const matchingObj = findFile(searchWord.value, allFiles);
		const displayInHtml = matchingObj.map(function(fileName){
			return `
				<li>
					<span class="">${fileName.file}.${fileName.extention.match(regex2)}</span>
					
				</li>
			`
		}).join('');
		matches.innerHTML = displayInHtml;
		} else {
			
		}
 	} 

//  var pdf = allFiles.filter(function(allFile){
// 	if (allFile.extention === 'pdf') {
// 		return true;
// 	}
// });
// console.log(pdf);
 

 const searchWord = document.querySelector('.search');
 const matches = document.querySelector('.match');
 const ext = document.querySelector('.select-picker');


searchWord.addEventListener('change', findMatches);
searchWord.addEventListener('keyup', findMatches);
ext.addEventListener('change', findExt);

