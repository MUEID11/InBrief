/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../Features/thunks/userThunks';

const PreferenceModal = ({ modalOpen, setModalOpen, trigger }) => {
  const { user } = useSelector((state) => state?.user);
  const [selectedTags, setSelectedTags] = useState(user?.preferences || []);
  const dispatch = useDispatch();
  useEffect(() => {
    setSelectedTags(user?.preferences || []);
  }, [user]);

  console.log(selectedTags);

  const tags = ['music', 'business', 'war', 'technology', 'sports', 'global warming'];

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const prefSubmit = () => {
    // submit selected tags here
    console.log('selectedTags=> ', selectedTags);
    dispatch(updateUser({ ...user, preferences: selectedTags }));
    setModalOpen(false);
    // setSelectedTags([]);
  };

  const modal = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (!modalOpen || modal.current.contains(target) || trigger.current.contains(target)) return;
      setModalOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <>
      <div className="container mx-auto">
        <div
          className={`mt-10 fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-gray-900/70 px-4 py-5 ${
            modalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none select-none'
          } transition-all duration-300`}>
          <div ref={modal} className="w-full max-w-[970px] rounded-[20px] bg-white px-8 py-12 text-center md:px-[70px] md:pt-[60px] ">
            <h3 className="pb-[18px] text-xl font-semibold text-dark dark:text-white sm:text-2xl">Select Your Favorite Topics</h3>
            <span className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-red-500`}></span>
            <div className="flex flex-wrap gap-4">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className={`px-4 py-2 rounded-full border border-gray-500 text-white transition 
            ${selectedTags.includes(tag) ? 'bg-purple-500 border-purple-500' : 'bg-gray-800 hover:bg-gray-600'}`}
                  onClick={() => toggleTag(tag)}>
                  {tag}
                </button>
              ))}
            </div>
            <div className="-mx-3 flex flex-wrap mt-8">
              <div className="w-1/2 px-3">
                <button
                  onClick={() => {
                    setModalOpen(false);
                  }}
                  className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white ">
                  Cancel
                </button>
              </div>
              <div className="w-1/2 px-3">
                <button
                  onClick={prefSubmit}
                  className="block w-full rounded-md border border-primary bg-slate-800 p-3 text-center text-base font-medium text-white transition hover:bg-blue-dark">
                  <a href={`/#`}> Submit </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreferenceModal;
