from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Clear existing data
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Create teams
        marvel = Team.objects.create(name='marvel')
        dc = Team.objects.create(name='dc')

        # Create users
        users = [
            User(email='ironman@marvel.com', name='Iron Man', team='marvel', is_superhero=True),
            User(email='captain@marvel.com', name='Captain America', team='marvel', is_superhero=True),
            User(email='batman@dc.com', name='Batman', team='dc', is_superhero=True),
            User(email='wonderwoman@dc.com', name='Wonder Woman', team='dc', is_superhero=True),
        ]
        for user in users:
            user.save()

        # Assign users to teams
        marvel.members.set([u for u in users if u.team == 'marvel'])
        dc.members.set([u for u in users if u.team == 'dc'])

        # Create activities
        Activity.objects.create(user=users[0], type='run', duration=30, date='2025-11-01')
        Activity.objects.create(user=users[1], type='cycle', duration=45, date='2025-11-02')
        Activity.objects.create(user=users[2], type='swim', duration=60, date='2025-11-03')
        Activity.objects.create(user=users[3], type='yoga', duration=50, date='2025-11-04')

        # Create leaderboard
        Leaderboard.objects.create(team=marvel, points=150)
        Leaderboard.objects.create(team=dc, points=120)

        # Create workouts
        Workout.objects.create(name='Pushups', description='Do 20 pushups', difficulty='easy')
        Workout.objects.create(name='Sprints', description='Sprint for 100m', difficulty='medium')
        Workout.objects.create(name='Deadlift', description='Deadlift 100kg', difficulty='hard')

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data'))
