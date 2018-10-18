Vue.component('modal', {
  template: '#modal-template'
});

let chmod = {

	       }

var app = new Vue({
	el:"#app-chmod",
	data: {
		selectOne: '---',
	    optionsOne: [
	      { text: '7', value: 'rwx' },
	      { text: '6', value: 'rw-' },
	      { text: '5', value: 'r-x' },
	      { text: '4', value: 'r--' },
	      { text: '3', value: '-wx' },
	      { text: '2', value: '-w-' },
	      { text: '1', value: '--x' },
	      { text: '0', value: '---' },
        ],
        selectTwo: '---',
        optionsTwo: [
	      { text: '7', value: 'rwx' },
	      { text: '6', value: 'rw-' },
	      { text: '5', value: 'r-x' },
	      { text: '4', value: 'r--' },
	      { text: '3', value: '-wx' },
	      { text: '2', value: '-w-' },
	      { text: '1', value: '--x' },
	      { text: '0', value: '---' },
        ],
        selectThree: '---',
        optionsThree: [
	      { text: '7', value: 'rwx' },
	      { text: '6', value: 'rw-' },
	      { text: '5', value: 'r-x' },
	      { text: '4', value: 'r--' },
	      { text: '3', value: '-wx' },
	      { text: '2', value: '-w-' },
	      { text: '1', value: '--x' },
	      { text: '0', value: '---' },
        ],
        showModal: false
	}, 
});
