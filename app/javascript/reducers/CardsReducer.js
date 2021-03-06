export default function cardsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    const lists = action.board.lists;
    let cards = [];

    lists.forEach(list => {
      cards = cards.concat(...list.cards);
    });

    return cards;
  } else if (action.type === 'CREATE_CARD_SUCCESS') {
    return state.concat(action.card);
  } else {
    return state;
  }
}
