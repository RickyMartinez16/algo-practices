void findZigZagSequence(vector < int > a, int n){
    sort(a.begin(), a.end());
    int mid = (n + 1)/2;
    swap(a[mid], a[n-1]);

    int st = mid + 1;
    int ed = n - 1;
    while(st <= ed){
        swap(a[st], a[ed]);
        st = st + 1;
        ed = ed + 1;
    }
    for(int i = 0; i < n; i++){
        if(i > 0) cout << " ";
        cout << a[i];
    }
    cout << endl;
}


void findZigZagSequence(vector < int > a, int n){
    sort(a.begin(), a.end());
    int mid = -1 + (n + 1)/2;//<HERE
    swap(a[mid], a[n-1]);

    int st = mid + 1;
    int ed = n - 2;//<<HERE
    while(st <= ed){
        swap(a[st], a[ed]);
        st = st + 1;
        ed = ed - 1;//<<HERE
    }
    for(int i = 0; i < n; i++){
        if(i > 0) cout << " ";
        cout << a[i];
    }
    cout << endl;
}