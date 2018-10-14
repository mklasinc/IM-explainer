import Barba from 'barba.js';
import CharacterPick from './character-pick.js';

export const CharacterPage = Barba.BaseView.extend({
    namespace : 'character',
    onEnter   : function () {
    // The new Container is ready and attached to the DOM.
        console.log(this.namespace, ' is attached');
    },
    onEnterCompleted : function () {
    // The Transition has just finished.
        console.log(this.namespace, ' is loaded and ready to go');
        CharacterPick();
    },
    onLeave : function () {
    // A new Transition toward a new page has just started.
        console.log(this.namespace, ' is leaving');
    },
    onLeaveCompleted : function () {
    // The Container has just been removed from the DOM.
        console.log(this.namespace, ' leave is completed');
    }
});
