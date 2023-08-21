import React from 'react';

type LanguagePropsType = {
    name: string
}
const Language = (props: LanguagePropsType) => {
    return (
        <div>
            <span>{props.name}</span>
        </div>
    );
};

export default Language;