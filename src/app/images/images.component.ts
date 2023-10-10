import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { collection, addDoc, Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent implements OnInit {
  constructor(private afs: Firestore) {}
  @ViewChild('videoElement') videoElement!: ElementRef;
  @ViewChild('canvasElement') canvasElement!: ElementRef;
  @ViewChild('capturedImage') imgElement!: ElementRef;

  ngOnInit(): void {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        this.videoElement.nativeElement.srcObject = stream;
        this.videoElement.nativeElement.play();
      })
      .catch((error) => {
        console.log('Error accessing camera: ', error);
      });
  }

  captureImage(): void {
    const text = 'fuck you givi,goga,sandro,vano,luka,dachi,cio';
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 1;
    utterance.rate = 1;
    speechSynthesis.speak(utterance);

    const canvas = this.canvasElement.nativeElement;
    const context = canvas.getContext('2d');
    const video = this.videoElement.nativeElement;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imgUrl = canvas.toDataURL('image/png');
    this.imgElement.nativeElement.src = imgUrl;
    let imgUrls = {
      img: imgUrl,
    };
    let col = collection(this.afs, 'images');
    addDoc(col, imgUrls)
      .then(() => {
        console.log('works');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
