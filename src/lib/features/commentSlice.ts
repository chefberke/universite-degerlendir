import { createClient } from '@/utils/client'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CommentState {
  data: any[] | undefined;
  allComments: any[] | undefined;
  loading: boolean;
  error: string | null;
}

const initialState: CommentState = {
  data: undefined,
  allComments: undefined,
  loading: false,
  error: null,
}

export const fetchComment = createAsyncThunk('university/comments', async (id: any) => {
  try {
    const supabase = createClient();
    const { data, error } = await supabase.from('comment').select("*").eq('university_id', id);

    if (error) {
      console.log("fetchComment", error);
      throw error;
    }

    if(data.length === 0) {
      return
    }

    return data;

  } catch (error) {
    console.log("fetchComment", error);
    throw error;
  }
})

export const fetchAllComment = createAsyncThunk('university/Allcomments', async () => {
  try {
    const supabase = createClient();
    const { data: allComment, error } = await supabase.from('comment').select("*")

    if (error) {
      console.log("fetchComment", error);
      throw error;
    }

    if(allComment.length === 0) {
      return
    }

    return allComment;

  } catch (error) {
    console.log("fetchComment", error);
    throw error;
  }
})



export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    //
  },
  extraReducers: (builder) => {
    builder.addCase(fetchComment.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchComment.fulfilled, (state, action: PayloadAction<any[] | undefined>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null
    });
    builder.addCase(fetchComment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch comments';
    });
    builder.addCase(fetchAllComment.fulfilled, (state, action) => {
      state.allComments = action.payload;
      state.loading = false;
      state.error = null
    })
    builder.addCase(fetchAllComment.pending, (state,action) => {
      state.loading = true;
      state.error = null
    })
    builder.addCase(fetchAllComment.rejected, (state,action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch all comments'
    })
  },
});

export const { } = commentSlice.actions

export default commentSlice.reducer
