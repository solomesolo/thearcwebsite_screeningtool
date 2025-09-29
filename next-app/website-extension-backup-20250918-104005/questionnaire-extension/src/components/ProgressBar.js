export default function ProgressBar({ progress }) {
    return (
        <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}>
                <span className="progress-text">{progress}%</span>
            </div>
        </div>
    );
}