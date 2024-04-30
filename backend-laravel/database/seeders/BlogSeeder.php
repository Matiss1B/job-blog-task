<?php

namespace Database\Seeders;

use App\Models\API\V1\Blog;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $blogs = [
            [
                "title"=>"My Audi",
                "description"=> "Audi, the esteemed German automobile manufacturer, epitomizes the pinnacle of automotive engineering, luxury, and innovation. Renowned globally for its iconic four interlinked rings logo, Audi has established itself as a symbol of sophistication and performance since its inception in 1909. With a rich heritage spanning over a century, Audi continues to push the boundaries of automotive excellence, seamlessly blending cutting-edge technology with timeless design aesthetics. At the heart of Audi's ethos lies a commitment to crafting vehicles that resonate with both drivers and enthusiasts alike. From the sleek lines of the Audi A4 to the commanding presence of the Audi Q7, each model in Audi's lineup exudes elegance and precision engineering. Whether navigating bustling city streets or conquering rugged terrain, Audi vehicles deliver an unparalleled driving experience characterized by unparalleled comfort, performance, and safety. Moreover, Audi has been at the forefront of automotive innovation, pioneering advancements such as quattro all-wheel drive and Audi Virtual Cockpit. These innovations not only enhance the driving dynamics but also redefine the way drivers interact with their vehicles, creating a seamless fusion of man and machine.",
                "img"=>"/images/hKRdp2ydAhQerAMABs9sNUw8sK4YL9HK47aB8fdLjvvYEFgOcWL9aaUGEgJw.jpg",
                "user_id"=>1
            ],
            [
                "title"=>"My room",
                "description"=> "Entering the room feels like stepping into a serene oasis. Soft, muted hues adorn the walls, creating a tranquil atmosphere. Natural light filters in through sheer curtains, casting a gentle glow on the space. A plush rug covers the hardwood floor, inviting bare feet to sink in. A cozy reading nook beckons with overstuffed cushions and a warm throw blanket. A vintage lamp illuminates a small desk cluttered with books and trinkets. The faint scent of lavender lingers in the air, calming the senses. It's a sanctuary of relaxation, where time seems to slow down and worries fade away.",
                "img"=>"/images/ZzfefiuqiXRSio3QoGGKlcEdEzig5GI6K1y14HoJQ73TfZH2BTID7K0NknNr.jpg",
                "user_id"=>1
            ],
            [
                "title"=>"Best home dish",
                "description"=> " The desert stretches endlessly, a vast expanse of golden sand dunes rolling into the distance. The sun beats down mercilessly, painting the landscape with hues of amber and ochre. Heat waves distort the horizon, creating a mirage of oasis that vanishes upon closer inspection. Sparse vegetation clings to life, resilient against the harsh conditions. The air is dry and still, punctuated only by the occasional whisper of wind stirring the sand. In the silence, the desert seems to hold its breath, a timeless realm where time stands still and the vastness of nature reigns supreme.",
                "img"=>"/images/MERCHDSFELRLK36PfLHU65KnT9EKrazC0hHL9TFqqXZMdtolJkXTn8yYFZtd.jpg",
                "user_id"=>1
            ]
        ];
        foreach ($blogs as $blog){
            Blog::query()->create($blog);
        }
    }
}
