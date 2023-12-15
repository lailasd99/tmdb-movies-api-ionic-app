import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.page.html',
  styleUrls: ['./movies-details.page.scss'],
})
export class MoviesDetailsPage implements OnInit {
  movie : any;
  imageBaseUrl = environment.images;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    const id = <string>this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieDetails(id).subscribe(res => {
      console.log(res);
      this.movie = res;
    })
  }

  openHomePage() {
    window.open(this.movie.homepage)
  }

}
