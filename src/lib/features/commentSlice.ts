import { createClient } from '@/utils/client'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CommentState {
  data: any[] | undefined;
  loading: boolean;
  error: string | null;
}

const initialState: CommentState = {
  data: undefined,
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

    return data;

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
  },
});

export const { } = commentSlice.actions

export default commentSlice.reducer
