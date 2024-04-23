cd frontend
npm run build
cp build/* ../backend/public
git commit -am "nouveau deploiement"
git push
git pull
cd ..
vercel deploy --prod


