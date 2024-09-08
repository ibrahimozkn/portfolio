import React from "react";

interface TimelineItem {
  year: string;
  content: string | React.ReactNode;
}

const timelineItems: TimelineItem[] = [
  { year: "2019", content: "BSc. Computer Engineering @ METU 🕒" },
  { year: "2021", content: "Software Dev @ Niyel Technologies" },
  {
    year: "2023",
    content: (
      <>
        BSc. Computer Engineering 🎓 <br /> MSc. Software Systems Engineering @
        HPI 🕒
      </>
    ),
  },
  {
    year: "2024",
    content: (
      <>
        Student Assistant @ HPI <br /> Morphou Software Co-Founder 💼
      </>
    ),
  },
  { year: "2025", content: <span aria-label="Unknown future">🤷‍♂️</span> },
];

function Timeline() {
  return (
    <ol className="timeline timeline-vertical xl:timeline-horizontal my-5">
      {timelineItems.map((item, index) => (
        <li key={item.year}>
          {index > 0 && <hr />}
          <div className="timeline-start">{item.year}</div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box">{item.content}</div>
          {index < timelineItems.length - 1 && <hr />}
        </li>
      ))}
    </ol>
  );
}

export default Timeline;
