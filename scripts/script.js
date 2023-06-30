"use strict";
const container = document.querySelector('.container');
const mainBlock = container.querySelector('.square-body');
const elemnts = Array.from(mainBlock.querySelectorAll('.block'));


container.addEventListener('click', (e) => {
	const target = e.target;
	   let blocks = mainBlock.querySelectorAll('.block');
		let arrayBlocks = Array.from(blocks);
		let block = findElem(arrayBlocks, target.closest('.block'));
	   let index = getIndexBlock(arrayBlocks, block);
	
	if (target.closest('.right')) {
		
		if ( index === arrayBlocks.length-1) {
			return;
		} else { 
			mainBlock.innerHTML = '';
			appendArrayToBlock(newArr(arrayBlocks, index, index +1), mainBlock);
		}
	}
	if (target.closest('.left')) { 

		if (index === 0) {
			return;
		} else { 
			mainBlock.innerHTML = '';
			appendArrayToBlock(newArr(arrayBlocks, index, index - 1), mainBlock);
		}
	}
	if (target.closest('.top')) { 

		if (index >= 0&&index<=4) {
			return;
		} else { 
			mainBlock.innerHTML = '';
			appendArrayToBlock(newArr(arrayBlocks, index, index - 5), mainBlock);
		}
	}
	if (target.closest('.bottom')) { 

		if ( index <= arrayBlocks.length - 1&&index >= arrayBlocks.length - 5) {
			return;
		} else { 
			mainBlock.innerHTML = '';
			newArr(arrayBlocks, index, index + 5).forEach(el => {
				mainBlock.append(el);
			});
		}
		
	}
	if (target.closest('.btn-reset')) { 
		mainBlock.innerHTML = '';
		appendArrayToBlock(elemnts, mainBlock);
	}
	
});
 
const appendArrayToBlock = (array, block) => {
	array.forEach(el => {
		block.append(el);
	});
 }
const findElem = (arrayElems,target) => {
	return arrayElems.find(el=>el===target);//
}
const getCoordOfBlock = (elem) => {
return elem.getBoundingClientRect();
}
 
const getIndexBlock = (arrayOfBlocks,elem) => {
	const index=arrayOfBlocks.findIndex(el => el === elem)
	return index;
}
 
const newArr = (array,indexEl,indexNextEl) => { 

	const newArray = [];

	for(let i=0;i<array.length;i++)
	{
		if (i === indexEl) {
			newArray[i] = array[indexNextEl];
		} else if (i === indexNextEl) {
			newArray[i] = array[indexEl];
		} else { 
			newArray[i] = array[i];
		}
	}
	return newArray;
}
