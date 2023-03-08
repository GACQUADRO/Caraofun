const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');


const audioContext = new AudioContext();
navigator.mediaDevices.getUserMedia({ audio: true })
    .then((stream) => {
        const source = audioContext.createMediaStreamSource(stream);
        const analyser = audioContext.createAnalyser();
        source.connect(analyser);
    })
    .catch((error) => {
        console.error('getUserMedia error:', error);
    });


analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);


function draw() {
    requestAnimationFrame(draw);
    analyser.getByteFrequencyData(dataArray);
    const average = dataArray.reduce((acc, val) => acc + val) / bufferLength;
    const y = canvas.height - average / 256 * canvas.height;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(canvas.width, y);
    context.stroke();
}
draw();
