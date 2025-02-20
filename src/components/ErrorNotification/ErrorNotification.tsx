import cn from 'classnames';
import React, { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { setError } from '../../store/slices/todos.slice';

interface Props {
  errorMessage: string;
}
export const ErrorNotification: React.FC<Props> = React.memo(
  function ErrorNotification({ errorMessage }) {
    const dispatch = useAppDispatch();

    useEffect(() => {
      if (errorMessage) {
        window.setTimeout(() => {
          dispatch(setError(''));
        }, 3000);
      }
    }, [dispatch, errorMessage]);

    return (
      <div
        data-cy="ErrorNotification"
        className={cn(
          'notification is-danger is-light has-text-weight-normal',
          {
            hidden: !errorMessage,
          },
        )}
      >
        <button
          data-cy="HideErrorButton"
          type="button"
          className="delete"
          onClick={() => dispatch(setError(''))}
        />
        {errorMessage}
      </div>
    );
  },
);
