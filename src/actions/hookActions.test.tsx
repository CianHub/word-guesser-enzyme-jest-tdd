import moxios from 'moxios';
import { getSecretWord } from './hookActions';

describe('moxios', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('getSecret word will call setSecretWord when it gets an axios response', async () => {
    const secretWord = 'party';

    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    const mockSetSecretWord = jest.fn();

    await getSecretWord(mockSetSecretWord);

    expect(mockSetSecretWord).toHaveBeenCalledWith(secretWord);
  });
});
