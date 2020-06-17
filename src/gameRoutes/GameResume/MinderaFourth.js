import React from "react";

const Mindera4Sep = ({ timestamps }) => {
    return (
        <article>
            {timestamps.minderaFourSep.isFinished && (
                <>
                {timestamps.minderaFourSep.newLanguageProject && (
                    <p>You decided to be a part of a new project</p>
                )}
                {!timestamps.minderaFourSep.newLanguageProject && (
                    <p>You decided to play it safe and not take time to learn a new languge</p>
                )}
                </>
            )}
        </article>
    );
};

const Mindera4Dec = ({ timestamps }) => {
    return (
        <article>
            {timestamps.minderaFourDec.isFinished && (
                <>
                {timestamps.minderaFourDec.doneWorkshop && (
                    <p>You decided to do a mindfulness workshop .</p>
                )}
                {!timestamps.minderaFourDec.doneWorkshop && (
                    <p>You decided to focus on your project instead of going to the mindfulness workshop.</p>
                )}
                </>
            )}
        </article>
    );
};

const Mindera4Mar = ({ timestamps }) => {
    return (
        <article>
            {timestamps.minderaFourMar.isFinished && (
                <>
                {timestamps.minderaFourMar.minderaTechDay && (
                    <p>You decided to make an apresentation on Mindera Tech Day.</p>
                )}

                {!timestamps.minderaFourMar.minderaTechDay && (
                    <p>You decided to decline the invite to do the presentation of Mindera Tech Day</p>
                )}  
                </>
            )}
        </article>
    );
};

const Mindera4Jun = ({ timestamps }) => {
    return (
        <article>
            {timestamps.minderaFourJun.isFinished && (
                <> 
                {timestamps.minderaFourJun.surf && (
                    <p>You decided to {timestamps.minderaFourJun.surf}.</p>
                )}
                </>
            )}
        </article>
    );
};

const MinderaFourthChoices = ({ timestamps }) => {
    return (
      <>
        <Mindera4Sep timestamps={timestamps} />
        <Mindera4Dec timestamps={timestamps} />
        <Mindera4Mar timestamps={timestamps} />
        <Mindera4Jun timestamps={timestamps} />
      </>
    );
  };

export default MinderaFourthChoices;