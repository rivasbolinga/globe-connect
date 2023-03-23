import { expect } from 'vitest';
import modalReducer, {
  openModal,
  closeModal,
  selectContinent,
  clearContinent,
} from './modalSlice';

describe('modal reducer', () => {
  const initialState = {
    isOpen: false,
    selectedContinent: null,
  };

  it('should return the initial state', () => {
    expect(modalReducer(undefined, {})).toEqual(initialState);
  });

  it('should open modal', () => {
    const expectedState = {
      ...initialState,
      isOpen: true,
    };
    expect(modalReducer(initialState, openModal())).toEqual(expectedState);
  });

  it('should close modal', () => {
    const expectedState = {
      ...initialState,
      isOpen: false,
    };
    expect(modalReducer(initialState, closeModal())).toEqual(expectedState);
  });

  it('should handle select continent', () => {
    const expectedState = {
      ...initialState,
      selectedContinent: 'Europe',
    };
    expect(modalReducer(initialState, selectContinent('Europe'))).toEqual(
      expectedState,
    );
  });

  it('should handle clear continent', () => {
    const state = {
      ...initialState,
      selectedContinent: 'Europe',
    };
    const expectedState = {
      ...initialState,
      selectedContinent: null,
    };
    expect(modalReducer(state, clearContinent())).toEqual(expectedState);
  });
});
